import React, {useRef, useState} from 'react';
import { useEffect } from 'react';
import { getIncomesCategoriesByDate } from '../../../shared/http/incomesAPI';

import CanvasLoader from '../../../shared/ui/Loader/CanvasLoader/CanvasLoader';
import './Canvas.scss'

function drawPieSlice(ctx, centerX, centerY, radius, startAngle, endAngle, color) {
    ctx.fillStyle = color;
    ctx.beginPath();
	ctx.moveTo(centerX,centerY);
	ctx.arc(centerX, centerY, radius, startAngle, endAngle);
	ctx.fill();
    ctx.closePath();
}

function calcCount(array) {
    let count = 0;
    array.forEach((income, i) => {
        count+= income.amount;
    })
    return count;
    
}

function makeDiagram(array, diagramArray, ctx, width, height) {
    let count = 0;
    
    array.forEach((income, i) => {
        count+= income.amount;
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

const diagramArray = [];
const Canvas = ({arrayDataWithPeriod, periodActive, canvasWidth, canvasHeight, isLoaded, setIsLoaded}) => {
    const canvas = useRef(null);
    const [categoryArray, setCategoryArray] = useState([]);

    useEffect(() => {
        arrayDataWithPeriod.forEach((income, i) => {
            categoryArray.forEach((category, j) => {
                if (income.category_id == category.id) {
                    diagramArray.push(
                        {
                            percent: income.amount/calcCount(arrayDataWithPeriod), 
                            color: category.color
                        }
                    )
                }
            })
            
        })
        setIsLoaded(true)
    }, [categoryArray])
    
    useEffect(() => {
        if (isLoaded) {
            updateCanvas(diagramArray);
            diagramArray.length = 0;
        }
    }, [isLoaded])
    
    useEffect(() => {
        setIsLoaded(false);
        const arrayId = [];
        
        arrayDataWithPeriod.forEach((income, i) => {
            arrayId.push(income.category_id);
        })
        getIncomesCategoriesByDate(arrayId)
            .then(data => setCategoryArray(data))
            
    }, [periodActive])

    const updateCanvas = (diagramArray) => {
        const ctx = canvas.current.getContext('2d');
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        makeDiagram(arrayDataWithPeriod, diagramArray, ctx, canvasWidth, canvasHeight);  
        
    }
    return (
        <>
            {isLoaded ?
                <canvas width={canvasWidth} height={canvasHeight} className='canvas' ref={canvas}></canvas>
                :
                <CanvasLoader/>
            }
        </>
       
    );
};

export default Canvas;