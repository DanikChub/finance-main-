import React, {useRef} from 'react';
import { useEffect } from 'react';
import './Canvas.scss'

function drawPieSlice(ctx, centerX, centerY, radius, startAngle, endAngle, color) {
    ctx.fillStyle = color;
    ctx.beginPath();
	ctx.moveTo(centerX,centerY);
	ctx.arc(centerX, centerY, radius, startAngle, endAngle);
	ctx.fill();
    ctx.closePath();
}

function makeDiagram(array, ctx, width, height) {
    let colors = ['red', 'blue', 'white', 'green', 'yellow', 'orange', 'brown']
    let count = 0;
    let diagramArray = [];
    array.forEach((income, i) => {
        count+= income.amount;
    })
    array.forEach((income, i) => {
        diagramArray.push(
            {
                percent: income.amount/count, 
                category: income.category,
                color: colors[i]
            }
        )
    })

    
    let startAngle = 0;
    let sliceAngle = 0;

    for (let i = 0; i < diagramArray.length; i++) {
        sliceAngle=diagramArray[i].percent*Math.PI*2;
        drawPieSlice(ctx, width/2,height/2,90, startAngle, startAngle + sliceAngle, diagramArray[i].color);
        ctx.lineWidth = 5;
        ctx.strokeStyle = 'rgb(57, 57, 57)';
        ctx.stroke();
        startAngle+=sliceAngle;
    
    }

    drawPieSlice(ctx, width/2,height/2,60, 0, Math.PI*2, 'rgb(57, 57, 57)');
    ctx.fillStyle = "#fff";
    ctx.font = ('30px serif');
    ctx.fillText(count, width/2-22,height/2+10);
}
    
    
const Canvas = ({arrayDataWithPeriod, canvasWidth, canvasHeight}) => {
    const canvas = useRef(null);
    useEffect(() => {
        updateCanvas();
       
    }, [arrayDataWithPeriod])
    const updateCanvas = () => {
        const ctx = canvas.current.getContext('2d');
        ctx.clearRect(0,0,1000,1000);
    makeDiagram(arrayDataWithPeriod, ctx, canvasWidth, canvasHeight);
        
    }
    return (
        <canvas width={canvasWidth} height={canvasHeight} className='canvas' ref={canvas}></canvas>
    );
};

export default Canvas;