class PiPro {
  getInfo() {
    return {
      id: 'Pipis',
      name: 'PiCreator Proprietary Tools',
      "color1": "#11B3EE",
      blocks: [
      {
          opcode: 'IsEven',
          blockType: Scratch.BlockType.BOOLEAN,
          text: 'is [A] even',
          arguments: {
            A: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: 2
            }
          }
        },
           {
          opcode: 'IsPrime',
          blockType: Scratch.BlockType.BOOLEAN,
          text: 'is [A] prime',
          arguments: {
            A: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: 7
            }
          }
        },
         {
          opcode: 'ReverseText',
          blockType: Scratch.BlockType.REPORTER,
          text: 'reverse [A]',
          arguments: {
            A: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: "hello world!"
            }
          }
        },
           {
          opcode: 'ShuffleText',
          blockType: Scratch.BlockType.REPORTER,
          text: 'shuffle [A]',
          arguments: {
            A: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: "hello world!"
            }
          }
        },
        {
          opcode: 'StrictlyEqual',
          blockType: Scratch.BlockType.BOOLEAN,
          text: '[A] === [B]',
          arguments: {
            A: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: "Pi"
            },
            B: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: "Creator"
            }
          }
        },
        {
          opcode: 'ItemSplit',
          blockType: Scratch.BlockType.REPORTER,
          text: 'item [A] of [B] split by [C]',
          arguments: {
            A: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: "3"
            },
            B: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: "Pi/Creator/Yet/Again"
            },
            C: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: "/"
            }
          }
        },

         {
          opcode: 'ItemRemove',
          blockType: Scratch.BlockType.REPORTER,
          text: 'remove item [A] of [B] split by [C]',
          arguments: {
            A: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: "3"
            },
            B: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: "Pi/Creator/Yet/Again"
            },
            C: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: "/"
            }
          }
        },

         {
          opcode: 'ItemInsert',
          blockType: Scratch.BlockType.REPORTER,
          text: 'insert [A] in spot [B] of [C] split by [D]',
          arguments: {
            A: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: "Yet"
            },
            B: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: "3"
            },
            C: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: "Pi/Creator/Again"
            },
            D: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: "/"
            }
          }
        },

         {
          opcode: 'ItemReplace',
          blockType: Scratch.BlockType.REPORTER,
          text: 'replace text in item [B] with [A] in [C] split by [D]',
          arguments: {
            A: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: "Creator"
            },
            B: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: "2"
            },
            C: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: "Pi/Eater/Yet/Again"
            },
            D: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: "/"
            }
          }
        },

         {
          opcode: 'ConvertToArray',
          blockType: Scratch.BlockType.REPORTER,
          text: 'convert [A] into array split by [B]',
          arguments: {
            A: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: "Pi/Creator"
            },
            B: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: "/"
            }
          }
        },

  {
          opcode: 'ConvertToString',
          blockType: Scratch.BlockType.REPORTER,
          text: 'convert Array [A] into a string split by [B]',
          arguments: {
            A: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: "[\"Pi\",\"Creator\"]"
            },
            B: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: "/"
            }
          }
        },

         {
          opcode: 'ItemDigitOf',
          blockType: Scratch.BlockType.REPORTER,
          text: 'index of [A] in [B] split by [C]',
          arguments: {
            A: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: "Creator"
            },
            B: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: "Pi/Creator/Yet/Again"
            },
            C: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: "/"
            }
          }
        },

      ]
    };
  }


   IsEven(args) {
if (args.A % 2 === 0)
{return "true";} else {return "false";}
  }

    IsPrime(args) {
    for(let i = 2, s = Math.sqrt(args.A); i <= s; i++) {
        if(args.A % i === 0) return false;
    }
    return true;
  }

     ReverseText(args) {
     var test = args.A;
var reversed = '';
for (var i = test.length - 1; i >= 0; i--) {
    reversed += test[i];
}
return reversed;
}

StrictlyEqual(args) {
     var test = args.A;
var reversed = '';
for (var i = test.length - 1; i >= 0; i--) {
    reversed += test[i];
}
return reversed;
}

  StrictlyEqual(args) {
return args.A === args.B;
  }

   ShuffleText(args) {
  var str = args.A
  var shuffled = str.split('').sort(function(){return 0.5-Math.random()}).join('');
  return shuffled;
}

  ItemSplit(args) {
var isone = args.A - 1;
var istwo = String(args.B);
var isthree = args.C
var robertloggia = istwo.split(isthree)[isone] ?? "";
return robertloggia;
  }

   ItemRemove(args) {
   var IhateJavascript = args.A - 1
   var robertloggia =
String(args.B)
  .split(String(args.C)) .filter((_, i) => i !== Scratch.Cast.toNumber(IhateJavascript)) .join(String(args.C));
  // stack overflow go brrr
return robertloggia;
  }

     ItemInsert(args) {
     var IhateJavascript = args.B - 1
   var robertloggia = String(args.C);
   var robertloggia = robertloggia.split(args.D)
   robertloggia.splice(IhateJavascript, 0, args.A)
   var robertloggia = robertloggia.join(String(args.D))
return robertloggia;
  }

  ItemReplace(args) {
     var IhateJavascript = args.B - 1
   var robertloggia = String(args.C);
   var robertloggia = robertloggia.split(args.D)
   robertloggia.splice(IhateJavascript, 1, args.A)
   var robertloggia = robertloggia.join(String(args.D))
return robertloggia;
  }

  pi() {
return pi;
}

tau() {
return tau;
}

getpionearg(args) {
return pi.slice(
Scratch.Cast.toNumber(0),
Scratch.Cast.toNumber(args.A)
);
}

getpidigitlocation(args) {
return pi.indexOf(
Scratch.Cast.toNumber(args.A)
);
}

pihasdigit(args) {
let test = pi.indexOf(
Number(args.A)
);
if (test === -1)
{
test = 'false'
}
else
{
test = 'true'
}
return test;
}

ConvertToArray(args) {
  var bigshot = args.A.split(args.B);
return JSON.stringify(bigshot);

}

ConvertToString(args) {
  var bigshot = JSON.parse(args.A)
  return bigshot.join(String(args.B))
}

ItemDigitOf(args) {
var betterdayslois = args.B.split(args.C);
var betterdayslois = betterdayslois.indexOf(args.A);
return betterdayslois + 1;
}

}

Scratch.extensions.register(new PiPro());
