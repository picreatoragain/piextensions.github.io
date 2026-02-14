// Temporary LISTS
// Made by picreatoragain
// Its lists.. but temporary
// its very cool trust if it even works

class TemporaryLists {

    constructor() {
    this.storage = {};
    // I couldnt figure out how to get it to clear after green flag is pressed ):
  }
  getInfo() {
    return {
      id: 'TempLists',
      name: 'Temporary Lists',
      "color1": "#980909",
      blocks: [


          {
          opcode: 'CreateList',
          blockType: Scratch.BlockType.COMMAND,
          text: 'create list variable [A]',
          arguments: {
            A: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: "Test"
            },
                B: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: "pi/creator/yet/again"
            },
          }
        },

         {
          opcode: 'DeleteList',
          blockType: Scratch.BlockType.COMMAND,
          text: 'delete list variable [A]',
          arguments: {
            A: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: "Test"
            },
          }
        },
        
             {
          opcode: 'ViewList',
          blockType: Scratch.BlockType.REPORTER,
          text: 'view list var [A]',
          arguments: {
            A: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: "Test"
            },
          }
        },

             {
          opcode: 'LengthList',
          blockType: Scratch.BlockType.REPORTER,
          text: 'length of [A]',
          arguments: {
            A: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: "Test"
            },
          }
        },

        {
          opcode: 'ItemSplit',
          blockType: Scratch.BlockType.REPORTER,
          text: 'item [A] of [B]',
          arguments: {
            A: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: "3"
            },
            B: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: "Test"
            },
            C: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: "/"
            }
          }
        },

         {
          opcode: 'ItemRemove',
          blockType: Scratch.BlockType.COMMAND,
          text: 'delete [A] of [B]',
          arguments: {
            A: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: "3"
            },
            B: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: "Test"
            },
          }
        },

         {
          opcode: 'ItemClear',
          blockType: Scratch.BlockType.COMMAND,
          text: 'delete all of [A]',
          arguments: {
            A: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: "Test"
            }
          }
        },

         {
          opcode: 'ItemInsert',
          blockType: Scratch.BlockType.COMMAND,
          text: 'insert [A] at [B] of [C]',
          arguments: {
            A: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: "thing"
            },
            B: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: "5"
            },
            C: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: "Test"
            }
          }
        },

        {
          opcode: 'ItemAdd',
          blockType: Scratch.BlockType.COMMAND,
          text: 'add [A] to [B]',
          arguments: {
            A: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: "thing"
            },
            B: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: "Test"
            },
          }
        },

        {
          opcode: 'ItemReplace',
          blockType: Scratch.BlockType.COMMAND,
          text: 'replace item [B] in [C] with [A]',
          arguments: {
            A: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: "thing"
            },
            B: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: "5"
            },
            C: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: "Test"
            }
          }
        },
 {
          opcode: 'ItemDigitOf',
          blockType: Scratch.BlockType.REPORTER,
          text: 'item # of [A] in [B]',
          arguments: {
            A: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: "thing"
            },
            B: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: "Test"
            }
          }
        },
  {
          opcode: 'ConvertToString',
          blockType: Scratch.BlockType.REPORTER,
          text: 'convert list [A] into a string split by [B]',
          arguments: {
            A: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: "Test"
            },
            B: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: "/"
            }
          }
        },
   {
          opcode: 'ViewAll',
          blockType: Scratch.BlockType.REPORTER,
          text: 'view all temporary lists',
        },
        
      ]
    };
  }

  CreateList(args) {
this.storage[args.A] = [];
  }

   DeleteList(args) {
delete this.storage[args.A];
  }


    ViewList(args) {
  return JSON.stringify(this.storage[args.A]) ?? NaN;
  }

  LengthList(args) {
  return (this.storage[args.A]||[]).length;
  }

  ItemSplit(args) {
 return this.storage[args.B][args.A - 1] ?? "";
  }

   ItemRemove(args) {
   var IhateJavascript = args.A - 1
this.storage[args.B].splice(IhateJavascript, 1)
  }

   ItemClear(args) {
this.storage[args.A] = [];
  }

     ItemInsert(args) {
     var IhateJavascript = args.B - 1
     this.storage[args.C].splice(IhateJavascript, 0, args.A)
  }

  ItemAdd(args) {
    this.storage[args.B].push(args.A)
  }

  ItemReplace(args) {
      var IhateJavascript = args.B - 1
     this.storage[args.C].splice(IhateJavascript, 1, args.A)
  }


ConvertToString(args) {
  //var test = this.storage[args.A]||[]
  //return test.join(String(args.B))
  return (this.storage[args.A]||[]).join(String(args.B));
}

ViewAll(args) {
  return Object.keys(this.storage);
}

ItemDigitOf(args) {
var IhateJavascript = this.storage[args.B]||[]
var IhateJavascript = IhateJavascript.indexOf(args.A);
return IhateJavascript + 1;
}

}
Scratch.extensions.register(new TemporaryLists());
