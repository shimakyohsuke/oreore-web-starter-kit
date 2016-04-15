var elasticTextarea = function(el) {
    if (el != null) {
        el.addEventListener('input', function(ev) {
            if (parseInt(el.rows, 10) < 8) {
                const currentRow = el.value.split("\n").length;
                el.rows = currentRow + 1;
            }
        });
    }
};
module.exports = elasticTextarea;
