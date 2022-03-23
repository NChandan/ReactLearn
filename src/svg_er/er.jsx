import React, { Component } from 'react';

const erNames = [
    { erName: "relationManyToMany" },

    { erName: "relationManyToOne" },

    { erName: "relationManyToOneOrMany" },

    { erName: "relationManyToOnlyOne" },

    { erName: "relationManyToZeroOrMany" },
    { erName: "relationManyToZeroOrOne" },

    { erName: "relationOneOrManyToMany" },
    { erName: "relationOneOrManyToOne" },
    { erName: "relationOneOrManyToOneOrMany" },
    { erName: "relationOneOrManyToOnlyOne" },
    { erName: "relationOneOrManyToZeroOrMany" },
    { erName: "relationOneOrManyToZeroOrOne" },

    { erName: "relationOneToMany" },
    { erName: "relationOneToOne" },
    { erName: "relationOneToOneOrMany" },
    { erName: "relationOneToOnlyOne" },
    { erName: "relationOneToZeroOrMany" },
    { erName: "relationOneToZeroOrOne" },

    { erName: "relationOnlyOneToMany" },
    { erName: "relationOnlyOneToOne" },
    { erName: "relationOnlyOneToOneOrMany" },
    { erName: "relationOnlyOneToOnlyOne" },
    { erName: "relationOnlyOneToZeroOrMany" },
    { erName: "relationOnlyOneToZeroOrOne" },

    { erName: "relationZeroOrManyToMany" },
    { erName: "relationZeroOrManyToOne" },
    { erName: "relationZeroOrManyToOneOrMany" },
    { erName: "relationZeroOrManyToOnlyOne" },
    { erName: "relationZeroOrManyToZeroOrMany" },
    { erName: "relationZeroOrManyToZeroOrOne" },

    { erName: "relationZeroOrOneToMany" },
    { erName: "relationZeroOrOneToOne" },
    { erName: "relationZeroOrOneToOneOrMany" },
    { erName: "relationZeroOrOneToOnlyOne" },
    { erName: "relationZeroOrOneToZeroOrMany" },
    { erName: "relationZeroOrOneToZeroOrOne" },
];
const Erdict = {
    relationManyToMany: {
        markerStart: "triangle",
        markerEnd: "revTriangle",
    },

    relationManyToOne: {
        markerStart: "triangle",
        markerEnd: "revCrossLine",
    },

    relationManyToOneOrMany: {
        markerStart: "triangle",
        markerEnd: "revTriangleCrossLine",
    },

    relationManyToOnlyOne: {
        markerStart: "triangle",
        markerEnd: "revDoubleCrossLine",
    },

    relationManyToZeroOrMany: {
        markerStart: "triangle",
        markerEnd: "revTriangleCircle",
    },
    relationManyToZeroOrOne: {
        markerStart: "triangle",
        markerEnd: "revCrossLineCircle",
    },

    relationOneOrManyToMany: {
        markerStart: "triangleCrossLine",
        markerEnd: "revTriangle",
    },
    relationOneOrManyToOne: {
        markerStart: "triangleCrossLine",
        markerEnd: "revCrossLine",
    },
    relationOneOrManyToOneOrMany: {
        markerStart: "triangleCrossLine",
        markerEnd: "revTriangleCrossLine",
    },
    relationOneOrManyToOnlyOne: {
        markerStart: "triangleCrossLine",
        markerEnd: "revDoubleCrossLine",
    },
    relationOneOrManyToZeroOrMany: {
        markerStart: "triangleCrossLine",
        markerEnd: "revTriangleCircle",
    },
    relationOneOrManyToZeroOrOne: {
        markerStart: "triangleCrossLine",
        markerEnd: "revCrossLineCircle",
    },

    relationOneToMany: {
        markerStart: "crossLine",
        markerEnd: "revTriangle",
    },
    relationOneToOne: {
        markerStart: "crossLine",
        markerEnd: "revCrossLine",
    },
    relationOneToOneOrMany: {
        markerStart: "crossLine",
        markerEnd: "revTriangleCrossLine",
    },
    relationOneToOnlyOne: {
        markerStart: "crossLine",
        markerEnd: "revDoubleCrossLine",
    },
    relationOneToZeroOrMany: {
        markerStart: "crossLine",
        markerEnd: "revTriangleCircle",
    },
    relationOneToZeroOrOne: {
        markerStart: "crossLine",
        markerEnd: "revCrossLineCircle",
    },

    relationOnlyOneToMany: {
        markerStart: "doubleCrossLine",
        markerEnd: "revTriangle",
    },
    relationOnlyOneToOne: {
        markerStart: "doubleCrossLine",
        markerEnd: "revCrossLine",
    },
    relationOnlyOneToOneOrMany: {
        markerStart: "doubleCrossLine",
        markerEnd: "revTriangleCrossLine",
    },
    relationOnlyOneToOnlyOne: {
        markerStart: "doubleCrossLine",
        markerEnd: "revDoubleCrossLine",
    },
    relationOnlyOneToZeroOrMany: {
        markerStart: "doubleCrossLine",
        markerEnd: "revTriangleCircle",
    },
    relationOnlyOneToZeroOrOne: {
        markerStart: "doubleCrossLine",
        markerEnd: "revCrossLineCircle",
    },

    relationZeroOrManyToMany: {
        markerStart: "triangleCircle",
        markerEnd: "revTriangle",
    },
    relationZeroOrManyToOne: {
        markerStart: "triangleCircle",
        markerEnd: "revCrossLine",
    },
    relationZeroOrManyToOneOrMany: {
        markerStart: "triangleCircle",
        markerEnd: "revTriangleCrossLine",
    },
    relationZeroOrManyToOnlyOne: {
        markerStart: "triangleCircle",
        markerEnd: "revDoubleCrossLine",
    },
    relationZeroOrManyToZeroOrMany: {
        markerStart: "triangleCircle",
        markerEnd: "revTriangleCircle",
    },
    relationZeroOrManyToZeroOrOne: {
        markerStart: "triangleCircle",
        markerEnd: "revCrossLineCircle",
    },

    relationZeroOrOneToMany: {
        markerStart: "crossLineCircle",
        markerEnd: "revTriangle",
    },
    relationZeroOrOneToOne: {
        markerStart: "crossLineCircle",
        markerEnd: "revCrossLine",
    },
    relationZeroOrOneToOneOrMany: {
        markerStart: "crossLineCircle",
        markerEnd: "revTriangleCrossLine",
    },
    relationZeroOrOneToOnlyOne: {
        markerStart: "crossLineCircle",
        markerEnd: "revDoubleCrossLine",
    },
    relationZeroOrOneToZeroOrMany: {
        markerStart: "crossLineCircle",
        markerEnd: "revTriangleCircle",
    },
    relationZeroOrOneToZeroOrOne: {
        markerStart: "crossLineCircle",
        markerEnd: "revCrossLineCircle",
    },
};


class ErDiagram extends Component {
    constructor(props) {
        super(props);
        this.state = {
            initailX: 10,
            initailY: 10,
            endX: 90,
            endY: 50,
            height: 0,
            width: 0,
            dPath: "M 0 0",
            isHoriz: true,
            erType: "relationManyToMany"
        }
    }

    componentDidMount() {
        this.svgPath(
            this.state.initailX, this.state.initailY,
            this.state.endX, this.state.endY, this.state.isHoriz
        );
    }

    // componentDidUpdate(prevProps, prevState) {
    //     if (this.props.hozi !== prevProps.hori) {
    //         console.log("some", this.props.hozi, prevProps.hozi);

    //         this.svgPath(
    //             this.state.initailX, this.state.initailY, this.state.endX, this.state.endY
    //         );
    //     }
    // }
    svgPath = (iniX, iniY, enX, enY, hoz) => {
        let h = parseInt(enY) - parseInt(iniY)
        let w = parseInt(enX) - parseInt(iniX)
        this.setState({
            height: h,
            width: w
        })

        this.newDPath(iniX, iniY, enX, enY, w, h, hoz);
    };
    newDPath = (iniX, iniY, enX, enY, w, h, hoz) => {

        let d = ""
        d = "M" + iniX.toString() + " " + iniY.toString();
        let wid = !hoz ? h : w;
        if (hoz) {
            // let newH = parseInt(wid) / 20 + parseInt(hoz ? iniX : iniY);
            let newH = parseInt(wid) / 20 + parseInt(iniX);
            d += this.hMovePath(newH, hoz);
            // newH = width/20+initailX
            // v = initailY
            let val = !hoz ? " H" : " V"
            // let val = hoz ? " V" : " H"
            console.log(hoz);
            // d += this.yPath(parseInt(iniY), hoz);
            d += this.hMovePath((parseInt(wid) / 20 + newH), hoz);
            // d += this.yPath(parseInt(iniY), hoz);
            d += this.hMovePath((parseInt(wid) / 2 + parseInt(iniX)), hoz);
            d += val + enY;
            d += this.hMovePath(parseInt(enX) - parseInt(wid) / 20, hoz);
            // d += this.yPath(parseInt(enY), hoz);
            d += this.hMovePath(parseInt(enX), hoz);

        } else {
            console.log("EKSE")
            let newV = parseInt(w) / 20 + parseInt(iniY);
            d += this.vetYMovePath(newV);
            d += this.vetXPath(parseInt(iniX));

            d += this.vetYMovePath((parseInt(h) / 20 + newV));
            d += this.vetXPath(parseInt(iniX))
            d += this.vetYMovePath((parseInt(h) / 2 + parseInt(iniY)));
            d += " H" + enY;
            d += this.vetYMovePath(parseInt(enX) - parseInt(w) / 20);
            d += this.vetXPath(parseInt(enY));
            d += this.vetYMovePath(parseInt(enX));
        }

        this.setState({
            dPath: d
        });
    };
    // Horizontal
    hMovePath = (x, hoz) => {
        let val = !hoz ? " V" : " H"
        return (val + x.toString());
    }

    // Vertical line  
    yPath = (y, hoz) => {
        let val = !hoz ? " H" : " V"
        return (val + (parseInt(y) - 5).toString() + val + (parseInt(y) + 5).toString() + val + (y).toString());
    }

    vetYMovePath = (x) => {
        // let val = !hoz ? " V" : " H"
        return (" V" + x.toString());
    }

    // Vertical line  
    vetXPath = (x) => {
        // let val = !hoz ? " H" : " V"
        return (" H" + (parseInt(x) - 5).toString() + " H" + (parseInt(x) + 5).toString() + " H" + (x).toString());
    }

    handleChangeChk = () => {
        let temp = this.state.isHoriz
        this.setState({
            isHoriz: !temp
        })
        let iniX = this.state.initailX;
        let iniY = this.state.initailY
        let enX = this.state.endX
        let enY = this.state.endY
        this.svgPath(iniX, iniY, enX, enY, temp);


    }

    // M80 80 V77 H75 H85 H80 V74 H75 H85 H80 V50 H20 V23 H15 H25 H20 V20
    // M30 30 H33 V25 V35 V30 H36 V25 V35 V30 H60 V90 H87 V85 V95 V90 H90


    // classDPath= (
    //     iniX = this.state.initailX, 
    //     iniY = this.state.initailY,
    //     enX = this.state.endX,
    //     enY = this.state.endY)=> {

    //     this.svgPath(iniX, iniY, enX, enY);

    // }

    initalXChangeHandler = (value) => {
        this.setState({ initailX: value });
        //  this.classDPath(iniX=value);
        let isHori = this.state.isHoriz;
        let iniX = value;
        let iniY = this.state.initailY
        let enX = this.state.endX
        let enY = this.state.endY
        this.svgPath(iniX, iniY, enX, enY, isHori);
    };

    initalYChangeHandler = (value) => {
        this.setState({ initailY: value });

        let isHori = this.state.isHoriz;
        let iniX = this.state.initailX
        let iniY = value;
        let enX = this.state.endX
        let enY = this.state.endY
        this.svgPath(iniX, iniY, enX, enY, isHori);
        // this.svgPath();
    };
    endXChangeHandler = (value) => {
        this.setState({ endX: value });

        let isHori = this.state.isHoriz;
        let iniX = this.state.initailX
        let iniY = this.state.initailY
        let enX = value;
        let enY = this.state.endY
        this.svgPath(iniX, iniY, enX, enY, isHori);
        // this.classDPath(enX=value);
    };
    endYChangeHandler = (value) => {
        this.setState({ endY: value });
        // this.classDPath(enY=value);

        let isHori = this.state.isHoriz;
        let iniX = this.state.initailX
        let iniY = this.state.initailY
        let enX = this.state.endX
        let enY = value;
        this.svgPath(iniX, iniY, enX, enY, isHori);
    };


    selectedErName = (e) => {
        console.log("LoG: ", e.target.value);
        this.setState({
            erType: e.target.value
        })
    }
    render() {
        const erList = erNames.map((item, i) => {
            return <option key={i} value={item.erName}>{item.erName}</option>
        })


        return (
            <div>
                <div style={{paddingLeft:'100px'}}>
                    <select onChange={this.selectedErName}>
                        {erList}
                    </select>
                </div>
                <div>
                    <div className="topping">
                        <input
                            type="checkbox"
                            id="topping"
                            name="topping"
                            value="isHoriz"
                            checked={this.state.isHoriz}
                            onChange={(e) => this.handleChangeChk()}
                        />
                        Horizontal
                    </div>
                    <div>
                        <label htmlFor="initailX">initailX </label>
                        <input
                            type="number"
                            value={this.state.initailX}
                            id="initailX"
                            onChange={(e) => this.initalXChangeHandler(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="initailY">initailY </label>
                        <input
                            type="number"
                            value={this.state.initailY}
                            id="initailY"
                            onChange={(e) => this.initalYChangeHandler(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="endX">EndX </label>
                        <input
                            type="number"
                            value={this.state.endX}
                            id="endX"
                            onChange={(e) => this.endXChangeHandler(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="endY">endY </label>
                        <input
                            type="number"
                            value={this.state.endY}
                            id="endY"
                            onChange={(e) => this.endYChangeHandler(e.target.value)}
                        />
                    </div>
                    data: {this.state.dPath}
                </div>
                <div>
                    <svg width="200px" height="200px" viewBox="0 0 100 100">
                        <defs>
                            <marker id="triangle" viewBox="0 0 10 10" refX="1" refY="5" markerUnits="strokeWidth" markerWidth="10"
                                markerHeight="10">
                                <path d="M 0 0 L 10 5 L 0 10 z" fill="none" stroke="black" width="1" />
                            </marker>
                            <marker id="revTriangle" viewBox="0 0 10 10" refX="1" refY="5" markerUnits="strokeWidth"
                                markerWidth="10" markerHeight="10" orient="180">
                                <path d="M 0 0 L 10 5 L 0 10 z" fill="none" stroke="black" width="1" />
                            </marker>

                            <marker id="crossLine" viewBox="0 0 10 10" refX="1" refY="5" markerUnits="strokeWidth" markerWidth="10"
                                markerHeight="10">
                                <path d="M 0 5 H 5 V0 V10 V5 H10" fill="none" stroke="black" width="1" />
                            </marker>
                            <marker id="revCrossLine" viewBox="0 0 10 10" refX="1" refY="5" markerUnits="strokeWidth"
                                markerWidth="10" markerHeight="10" orient="180">
                                <path d="M 0 5 H 5 V0 V10 V5 H10" fill="none" stroke="black" width="1" />
                            </marker>
                            <marker id="doubleCrossLine" viewBox="0 0 10 10" refX="1" refY="5" markerUnits="strokeWidth"
                                markerWidth="10" markerHeight="10">
                                <path d="M 0 5 H4 V0 V10 V5 H8 V0 V10 V5 H10" fill="none" stroke="black" width="1" />
                            </marker>

                            <marker id="revDoubleCrossLine" viewBox="0 0 10 10" refX="1" refY="5" markerUnits="strokeWidth"
                                markerWidth="10" markerHeight="10" orient="180">
                                <path d="M 0 5 H4 V0 V10 V5 H8 V0 V10 V5 H10" fill="none" stroke="black" width="1" />
                            </marker>

                            <marker id="triangleCrossLine" viewBox="0 0 10 10" refX="1" refY="5" markerUnits="strokeWidth"
                                markerWidth="10" markerHeight="10">
                                <path d="M0 5 V0 L 6 5 L 0 10 z H8 V0 V10 V5 H10" fill="none" stroke="black" width="1" />
                            </marker>

                            <marker id="revTriangleCrossLine" viewBox="0 0 10 10" refX="1" refY="5" markerUnits="strokeWidth"
                                markerWidth="10" markerHeight="10" orient="180">
                                <path d="M0 5 V0 L 6 5 L 0 10 z H8 V0 V10 V5 H10" fill="none" stroke="black" width="1" />
                            </marker>
                            <marker id="crossLineCircle" viewBox="0 0 10 10" refX="1" refY="5" markerUnits="strokeWidth"
                                markerWidth="10" markerHeight="10" orient="0">
                                <path d="M0 5 H2 V0 V10 V5 H10" fill="none" stroke="black" width="1" />
                                <circle cx="6.5" cy="5" r="3" fill="none" stroke="black" />
                            </marker>
                            <marker id="revCrossLineCircle" viewBox="0 0 10 10" refX="1" refY="5" markerUnits="strokeWidth"
                                markerWidth="10" markerHeight="10" orient="180">
                                <path d="M0 5 H2 V0 V10 V5 H10" fill="none" stroke="black" width="1" />
                                <circle cx="6.5" cy="5" r="3" fill="none" stroke="black" />
                            </marker>
                            <marker id="triangleCircle" viewBox="0 0 15 10" refX="1" refY="5" markerUnits="strokeWidth"
                                markerWidth="15" markerHeight="10" orient="0">
                                <path d="M0 5 V0 L 6 5 L 0 10 z H7" fill="none" stroke="black" width="1" />
                                <circle cx="10.5" cy="5" r="3.5" fill="none" stroke="black" />
                            </marker>
                            <marker id="revTriangleCircle" viewBox="0 0 15 10" refX="1" refY="5" markerUnits="strokeWidth"
                                markerWidth="15" markerHeight="10" orient="180">
                                <path d="M0 5 V0 L 6 5 L 0 10 z H7" fill="none" stroke="black" width="1" />
                                <circle cx="10.5" cy="5" r="3.5" fill="none" stroke="black" />
                            </marker>

                        </defs>
                        <path
                            d={this.state.dPath}
                            stroke="black"
                            fill="none"
                            marker-start={'url(#'+Erdict[this.state.erType]["markerStart"]+')'}
                            marker-end={'url(#'+Erdict[this.state.erType]["markerEnd"]+')'}
                        />
                    </svg>
                </div>
                {/* 
                <svg width="200px" height="200px" >
                    <path
                        d='M80 80 V77 H75 H85 H80 V74 H75 H85 H80 V50 H20 V23 H15 H25 H20 V20'
                        stroke="black"
                        fill="none"
                    />
                </svg>

                <div>
                    <svg width="100px" height="100px">
                        <defs>
                            <marker id="triangle" viewBox="0 0 10 10"
                                refX="1" refY="5"
                                markerUnits="strokeWidth"
                                markerWidth="10" markerHeight="10"
                                orient="auto">
                                <path d="M 0 0 L 10 5 L 0 10 z" stroke="black" fill="none" />
                            </marker>

                            <marker id="revtriangle" viewBox="0 0 10 10"
                                refX="1" refY="5"
                                markerUnits="strokeWidth"
                                markerWidth="10" markerHeight="10"
                                orient="auto">
                                <path d="M 0 5 L 10 0 L 10 10 z" stroke="black" fill="none" />
                            </marker>
                        </defs>
                        <path stroke="black" fill="none"
                            d="M 10 10 H50"
                            markerStart="url(#triangle)"
                            markerEnd="url(#revtriangle)"
                        />
                    </svg>
                </div> */}
            </div>
        );
    }
}

export default ErDiagram;