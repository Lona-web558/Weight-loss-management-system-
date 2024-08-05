document.addEventListener('DOMContentLoaded', function() {
    const measurementForm = document.getElementById('measurementForm');
    const measurementTableBody = document.getElementById('measurementTableBody');

    if (measurementForm) {
        measurementForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const waist = document.getElementById('waist').value;
            const lowerBelly = document.getElementById('lowerBelly').value;
            const hips = document.getElementById('hips').value;
            const date = new Date().toLocaleDateString();

            const measurement = { date, waist, lowerBelly, hips };
            saveMeasurement(measurement);
            measurementForm.reset();
            alert('Measurement saved successfully!');
        });
    }

    if (measurementTableBody) {
        displayMeasurements();
    }
});

function saveMeasurement(measurement) {
    let measurements = JSON.parse(localStorage.getItem('measurements')) || [];
    measurements.push(measurement);
    localStorage.setItem('measurements', JSON.stringify(measurements));
}

function displayMeasurements() {
    const measurements = JSON.parse(localStorage.getItem('measurements')) || [];
    const measurementTableBody = document.getElementById('measurementTableBody');
    measurementTableBody.innerHTML = '';

    measurements.forEach(measurement => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${measurement.date}</td>
            <td>${measurement.waist}</td>
            <td>${measurement.lowerBelly}</td>
            <td>${measurement.hips}</td>
        `;
        measurementTableBody.appendChild(row);
    });
}