function catcalc(cal) {
    var date = cal.date;
    var time = date.getTime()
    var field = document.getElementById("start");
    if (field != cal.params.inputField) {
        field = document.getElementById("end");
    } 
    var date2 = new Date(time);
    field.value = date2.print("%Y-%m-%d %H:%M");
}
Calendar.setup({
    inputField     :    "ftime",
    ifFormat       :    "%Y-%m-%d",
    showsTime      :    true,
    timeFormat     :    "24",
    onUpdate       :    catcalc
});
