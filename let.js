document.getElementById('startBtn').addEventListener('click', startSimulation);

function startSimulation() {
    var algorithm = document.getElementById('algorithm').value;
    var processes = [
        { id: 1, arrivalTime: 0, burstTime: 7 },
        { id: 2, arrivalTime: 2, burstTime: 4 },
        { id: 3, arrivalTime: 4, burstTime: 10}
    ]

}