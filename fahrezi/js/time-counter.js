document.addEventListener('DOMContentLoaded', function() {
    function updateTime() {
        const date = new Date();
        const timeElements = document.querySelectorAll('.time-number');
        
        const timeData = [
            { value: date.getHours(), label: "Hours" },
            { value: date.getMinutes(), label: "Minutes" },
            { value: date.getSeconds(), label: "Seconds" }
        ];

        timeElements.forEach((element, index) => {
            if (index < timeData.length) {
                // Pastikan angka selalu 2 digit
                const value = timeData[index].value.toString().padStart(2, '0');
                $(element).attr('data-number', value);
                $(element).text(value);
            }
        });
    }

    // Update setiap detik
    updateTime();
    setInterval(updateTime, 1000);
}); 