import React, { Component } from 'react';

class ZeroOneSvg extends Component {

    //  triangle revTriangle crossLine revCrossLine doubleCrossLine 
// revDoubleCrossLine triangleCrossLine revTriangleCrossLine
// crossLineCircle revCrossLineCircle triangleCircle revTriangleCircle


  

    circlePath = (cx, cy, r) => {
        return 'M '+cx+' '+cy+' m -'+r+', 0 a '+r+','+r+' 0 1,0 '+(r*2)+',0 a '+r+','+r+' 0 1,0 -'+(r*2)+',0';
    }
    render() {
        return (
            <div>
                <svg width="200px" height="200px" viewBox='0 0 100 100' >
                    <path stroke="black" fill="transparent" 
                        stroke-width="102222222222222233333333333333333" 
                        d="M10 10 H20 A5 5 1 0 0 30 10 A5 5 1 0 0 20 10 A5 5 1 0 0 30 10 H50 V20 H90 "
                    />
                </svg>
                <svg width="200px" height="200px">
                    <path fill='transparent' stroke='black'
                        d="
                            M 50 50
                            m -25, 0
                            a 25,25 0 1,0 50,0
                            a 25,25 0 1,0 -50,0
                            "
                    />
                </svg>
            </div>
        );
    }
}

export default ZeroOneSvg;