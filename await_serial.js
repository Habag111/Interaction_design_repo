

// function setup() {
//     createCanvas(400, 200);
//     textAlign(CENTER, CENTER);
//     textSize(24);
// }

// function draw() {
//     background(240);
//     fill(0);
//     text(serialValue, width / 2, height / 2);
// }

async function connectSerial() {
    if (port) return;
    if (!window.isSecureContext) {
        serialValue = 'use localhost or https';
        return;
    }
    if (!navigator.serial) {
        serialValue = 'Web Serial not supported';
        return;
    }

    try {
        port = await navigator.serial.requestPort();
        await port.open({ baudRate: 115200 });

        const reader = port.readable.pipeThrough(new TextDecoderStream()).getReader();
        let buffer = '';

        while (true) {
            const { value, done } = await reader.read();
            if (done) break;

            buffer += value;
            const lines = buffer.split(/\r?\n/);
            buffer = lines.pop();
            serialValue = (lines[lines.length - 1] || buffer).trim();
            TriggerAfterReceive();
        }
    } catch (error) {
        serialValue = 'connection cancelled';
        port = null;
    }
}

function mousePressed() {
    connectSerial();
}

// function touchStarted() {
//     connectSerial();
//     return false;
// }
