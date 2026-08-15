const fs = require('fs');
const readline = require('readline');

async function processLineByLine() {
  const fileStream = fs.createReadStream('C:\\Users\\User\\.gemini\\antigravity\\brain\\27021b8b-5765-4db9-99c1-51d1e57e0936\\.system_generated\\logs\\transcript_full.jsonl');
  const rl = readline.createInterface({ input: fileStream, crlfDelay: Infinity });

  let count = 0;
  for await (const line of rl) {
    try {
      const obj = JSON.parse(line);
      if (obj.tool_calls) {
        for (const call of obj.tool_calls) {
          if (call.name === 'write_to_file' || call.name === 'default_api:write_to_file' || call.name === 'replace_file_content' || call.name === 'default_api:replace_file_content') {
            const args = call.args || call.arguments || call.Arguments || call.parameters;
            const target = args.TargetFile || args.targetFile || args.file;
            if (target && target.includes('App.tsx')) {
               const content = args.CodeContent || args.ReplacementContent;
               if (content) {
                 fs.writeFileSync(`recovered_${count}.tsx`, content);
                 console.log(`Recovered version ${count}`);
                 count++;
               }
            }
          }
        }
      }
    } catch(e) {}
  }
}
processLineByLine();
