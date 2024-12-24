const fs = require('fs');

// ข้อมูลสำหรับแต่ละไฟล์
const fileContents = {
    'head.txt': "I'm head.",
    'body.txt': "I'm body.",
    'leg.txt': "I'm leg.",
    'feet.txt': "I'm feet.",
};

// เขียนไฟล์ทีละไฟล์
function createFiles() {
    return Promise.all(
        Object.entries(fileContents).map(([fileName, content]) =>
            new Promise((resolve, reject) => {
                fs.writeFile(fileName, content, 'utf8', (err) => {
                    if (err) {
                        reject(`Error writing ${fileName}: ${err.message}`);
                    } else {
                        console.log(`${fileName} created successfully!`);
                        resolve();
                    }
                });
            })
        )
    );
}

// อ่านไฟล์และรวมเนื้อหา
function combineFiles() {
    const inputFiles = ['head.txt', 'body.txt', 'leg.txt', 'feet.txt'];
    const outputFile = 'robot.txt';

    let readTasks = inputFiles.map((file) =>
        new Promise((resolve, reject) => {
            fs.readFile(file, 'utf8', (err, data) => {
                if (err) {
                    reject(`Error reading file ${file}: ${err.message}`);
                } else {
                    resolve(data.trim());
                }
            });
        })
    );

    Promise.all(readTasks)
        .then((contents) => {
            const combinedContent = contents.join('\n'); // รวมข้อความทั้งหมดโดยมีบรรทัดใหม่ระหว่างแต่ละข้อความ
            fs.writeFile(outputFile, combinedContent, 'utf8', (err) => {
                if (err) {
                    console.error(`Error writing to ${outputFile}: ${err.message}`);
                } else {
                    console.log(`File ${outputFile} created successfully!`);
                }
            });
        })
        .catch((err) => {
            console.error(err);
        });
}

// เรียกใช้ฟังก์ชัน
createFiles()
    .then(() => {
        combineFiles();
    })
    .catch((err) => {
        console.error(err);
    });
