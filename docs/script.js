$(document).ready(function () {
    $("input").on('input change keyup', function () {
        const reach = parseFloat($("#reach").val());
        const impact = parseFloat($("#impact").val());
        const confidence = parseFloat($("#confidence").val());
        const effort = parseFloat($("#effort").val());
        if (isNaN(reach) || isNaN(impact) || isNaN(confidence) || isNaN(effort)) {
            $("#rice-result").html("");

        } else {
            // round up to 2 decimal points
            const rice = Math.round(100 * (reach * impact * confidence) / effort) / 100.
            $("#rice-result").html(rice);
        }
    });
});
