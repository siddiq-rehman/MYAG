$(function () {
    $("#frmdatepicker").datepicker({ 
      format: 'yyyy-mm-dd',
          autoclose: true, 
          todayHighlight: true,
          endDate: '+0d',
          clearBtn: true
    }).datepicker('update', new Date());
  });

  $(function () {
    $("#todatepicker").datepicker({ 
     // dateFormat: 'dd-mm-yy',
     format: 'yyyy-mm-dd',
          autoclose: true, 
          todayHighlight: true,
          endDate: '+0d',
          clearBtn: true
    }).datepicker('update', new Date());
  });

 /* var fromfunction=()=>{
  $("#frmdatepicker")
  .on('changeDate', function(e) {
    console.log("frrom dadte change")
    this.clickfun();
      // `e` here contains the extra attributes
  });
}
*/

  $("#todatepicker")
  .on('changeDate', function(e) {
   // console.log("todadte change")
   // console.log(e.format(0,'mm-dd-yyyy'));
    var e11=new Event('toDatePick');
    //console.log(e11.target);
    e11.date=e.format(0,'yyyy-mm-dd');
    window.dispatchEvent(e11);
      // `e` here contains the extra attributes
  })



  $("#frmdatepicker")
  .on('changeDate', function(e) {
   // console.log("todadte change")
    //console.log(e.date);
    var e12=new Event('frmDatePick');
    //console.log(e11.target);
    e12.date=e.format(0,'yyyy-mm-dd');
    window.dispatchEvent(e12);
      // `e` here contains the extra attributes
  })


 







