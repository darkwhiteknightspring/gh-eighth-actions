const core = require("@actions/core");
// const github = require("@actions/github"); get more github context variables
const exec = require("@actions/exec");

function run() {
    // info about the bucket
    const bucket = core.getInput('bucket',{required:true});
    const bucketRegion = core.getInput('bucket-region',{required:true});
    const distFolder = core.getInput('dist-folder',{required:true});

    // upload file (using exec command on github aws cli)
    const s3Uri = `s3://${bucket}`;
    exec.exec(`aws s3 sync ${distFolder} ${s3Uri} --region ${bucketRegion}`)


    core.notice("Hello from my custom Javascript Action!")
}

run();