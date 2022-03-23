//  triangle revTriangle crossLine revCrossLine doubleCrossLine 
// revDoubleCrossLine triangleCrossLine revTriangleCrossLine
// crossLineCircle revCrossLineCircle triangleCircle revTriangleCircle

let Erdict = {
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
