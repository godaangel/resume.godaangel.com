var createReport = require('docx-templates');

const wordTemplate = function(res, data) {
  return new Promise((resolve, reject) => {
    var timestamp = new Date().getTime();
    var url = `public/templates/output_${timestamp}.docx`;
    console.log(data);
    for(let i in data){
      data[i].born = data[i].born.split('T')[0];
      data[i].program_list = eval(data[i].program_list);
      data[i].education_list = eval(data[i].education_list);
      data[i].work_list = eval(data[i].work_list);
    }
    createReport({
      template: 'public/templates/resume.docx',
      output: url,
      data: {
        resumeList: data
      },
    }).then((res) => {
      resolve(url.replace('public/', ''));
    })
  });
}

module.exports = wordTemplate;