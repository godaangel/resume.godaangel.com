var officegen = require('officegen');

var fs = require('fs');
var docx = officegen('docx');

const wordTemplate = function(res, data) {
  return new Promise((resolve, reject) => {
    docx.on('finalize', function(written) {
      console.log('Finish to create Word file.\nTotal bytes created: ' + written + '\n');
    });

    docx.on('error', function(err) {
      console.log(err);
    });

    var pObj = docx.createP({
      align: 'center'
    }); // 创建行 设置居中
    pObj.addText('人员简历名单', {
      bold: true,
      font_face: 'Arial',
      font_size: 18
    }); // 添加文字 设置字体样式 加粗 大小


    // var pObj = docx.createP();
    // pObj.addText('姓名');
    // pObj.addText(' with color', {
    //   color: '000088'
    // }); // 设置字体颜色
    // pObj.addText('性别');
    // pObj.addText('', {
    //   color: '00ffff',
    //   back: '000088'
    // });
    // pObj.addText('年龄');
    // pObj.addText('岁', {
    //   color: '000088'
    // });


    // var pObj = docx.createP();
    // pObj.addText('门诊（住院）号');
    // pObj.addText(' with color', {
    //   color: '000088'
    // });
    // pObj.addText('诊断');
    // pObj.addText('', {
    //   color: '000088'
    // });


    // var pObj = docx.createP();
    // pObj.addText('一、血液透析（滤过）能有效清除身体内过多的水分合霉素，是治疗急性和慢性肾衰竭等疾病的有效方法。');
    // var pObj = docx.createP();
    // pObj.addText('二、血液透析（滤过）治疗时，首先需要将患者血液引到体外，然后通过透析或滤过等方法清除水分和霉素，经受理后的血液再回到患者体外。');
    // var pObj = docx.createP();
    // pObj.addText('三、为了有效引出血液，治疗前需要建立血管通路（动静脉内痿或深静脉插管）。');
    // var pObj = docx.createP();
    // pObj.addText('四、为防止血液在体外管路和透析器发生凝固，一般需要在透析前和透析过程中注射肝素等抗凝药物。');
    // var pObj = docx.createP();
    // pObj.addText('五、血透过程中和治疗期间存在下列医疗风险，可能造成严重后果，甚至危及生命：');
    // var pObj = docx.createP();
    // pObj.addText('1.低血压，心力衰竭，心肌梗塞，心律失常，脑血管意外；');
    // var pObj = docx.createP();
    // pObj.addText('2.空气球栓塞；');
    // var pObj = docx.createP();
    // pObj.addText('3.过敏反应；');

    // var pObj = docx.createP();
    var table = [
      ['姓名', {val: data[0].username, opts: {gridSpan: 2}}, '出生年月', data[0].born.split('T')[0], {val: '', opts: {cellColWidth: 3000}}],
      ['身份证号', {val: data[0].id_card, opts: {gridSpan: 2}}, '民族', data[0].nation, {val: '', opts: {cellColWidth: 3000}}],
      ['毕业学校', {val: data[0].school, opts: {gridSpan: 4}}, {val: '', opts: {cellColWidth: 3000}}],
      ['专业', {val: data[0].major, opts: {gridSpan: 2}}, '政治面貌', data[0].political, {val: '', opts: {cellColWidth: 3000}}],
      ['最高学历', data[0].education, '最高学位', {val: data[0].degree, opts: {gridSpan: 2}}, {val: '', opts: {cellColWidth: 3000}}],
      ['从业年限', data[0].work_year, '职称', data[0].title, '当前职务', {val: data[0].position, opts: {cellColWidth: 3000}}],
      [2, '', {val: "", opts: {gridSpan: 2}}],
      [3, '', ''],
      [4, '', 'END'],
    ]

    var tableStyle = {
      tableColWidth: 2000,
      tableColor: "ada",
      tableSize: 0,
      tableAlign: "left",
      tableVAlign: 'center',
      tableFontFamily: "宋体",
      sz: 21,
      borders: true
    }

    docx.createTable(table, tableStyle);

    // docx.createTable(table, tableStyle);


    var out = fs.createWriteStream('out.docx'); // 文件写入
    out.on('error', function(err) {
      console.log(err);
    });


    var result = docx.generate(out); // 服务端生成word


    res.writeHead(200, {
      // 注意这里的type设置，导出不同文件type值不同application/vnd.openxmlformats-officedocument.presentationml.presentation
      "Content-Type": "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      'Content-disposition': 'attachment; filename=out.docx'
    });
    docx.generate(res); // 客户端导出word
  })
}

module.exports = wordTemplate;