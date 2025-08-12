import { Container } from "react-bootstrap";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from "react-chartjs-2";
ChartJS.register(ArcElement, Tooltip, Legend);

function Section3(){
    const data = {
        labels: ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'TypeScript'],
        datasets: [
            {
                label: "능력치",
                data: [20,25,15,20,10,10],
                backgroundColor: [
                    'rgba(183, 224, 255, 1)',
                    'rgba(255, 184, 224, 1)',
                    'rgba(253, 245, 170, 1)',
                    'rgba(115, 199, 199, 1)',
                    'rgba(205, 193, 255, 1)',
                    'rgba(255, 187, 92, 1)'
                ],
                borderWidth: 1,
            }
        ]
    };
    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: true,
                position: 'top',
            },
        },
    };

    return(
        <Container fluid id="about" className="p-4 bg-primary">
            <h2 id="h2" className="text-white py-5">about me</h2>
            <div style={{ maxWidth: '650px', height:'600px', margin: '0 auto'}}>
                <Doughnut data={data} options={options} />
            </div>
        </Container>
    )
}

export default Section3;