define([], function() {
  'use strict';

  var factory = function () {
    var obj = {
      LT: {
        'N5P': {
          'betType': 'N5P',
          'data': [
            {
              'items': [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
            },
            {
              'items': [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
            },
            {
              'items': [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
            },
            {
              'items': [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
            },
            {
              'items': [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
            }
          ]
        },
        'N5C': {
          'betType': 'N5C',
          'data': [
            {
              'items': [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
            },
            {
              'items': [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
            },
            {
              'items': [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
            },
            {
              'items': [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
            },
            {
              'items': [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
            }
          ]
        },

        //组选120
        'G5X120': {
          'betType': 'G5X120',
          'data': [
            {
              'items': [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
              'random': 5
            }
          ]
        },
        'G5X60': {
          'betType': 'G5X60',
          'data': [
            {
              'items': [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
              'random': 1
            },
            {
              'items': [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
              'random': 3
            }
          ],
          repeat: true
        },
        'G5X30': {
          'betType': 'G5X30',
          'data': [
            {
              'items': [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
              'random': 2
            },
            {
              'items': [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
              'random': 1
            }
          ],
          repeat: true
        },
        'G5X20': {
          'betType': 'G5X20',
          'data': [
            {
              'items': [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
              'random': 1
            },
            {
              'items': [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
              'random': 2
            }
          ],
          repeat: true
        },
        'G5X10': {
          'betType': 'G5X10',
          'data': [
            {
              'items': [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
            },
            {
              'items': [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
            }
          ],
          repeat: true
        },
        'G5X5': {
          'betType': 'G5X5',
          'data': [
            {
              'items': [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
            },
            {
              'items': [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
            }
          ],
          repeat: true
        },
        'N4P': {
          'betType': 'N4P',
          'data': [
            {
              'items': [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
            },
            {
              'items': [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
            },
            {
              'items': [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
            },
            {
              'items': [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
            }
          ]
        },
        'N4C': {
          'betType': 'N4C',
          'data': [
            {
              'items': [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
            },
            {
              'items': [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
            },
            {
              'items': [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
            },
            {
              'items': [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
            }
          ]
        },
        'G4X24': {
          'betType': 'G4X24',
          'data': [
            {
              'items': [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
              'random': 4
            }
          ]
        },
        'G4X12': {
          'betType': 'G4X12',
          'data': [
            {
              'items': [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
            },
            {
              'items': [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
              'random': 2
            }
          ],
          repeat:true
        },
        'G4X6': {
          'betType': 'G4X6',
          'data': [
            {
              'items': [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
              'random': 2
            }
          ]
        },
        'G4X4': {
          'betType': 'G4X4',
          'data': [
            {
              'items': [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
            },
            {
              'items': [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
            }
          ],
          repeat:true
        },

        'N3PF': {
          'betType': 'N3PF',
          'data': [
            {
              'items': [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
            },
            {
              'items': [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
            },
            {
              'items': [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
            }
          ]
        },
        'N3TF': {
          'betType': 'N3TF',
          'data': [
            {
              'items': [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27]
            }
          ]
        },
        'N3DF': {
          'betType': 'N3DF',
          'data': [
            {
              'items': [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
            }
          ]
        },
        'N3CF': {
          'betType': 'N3CF',
          'data': [
            {
              'items': [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
            },
            {
              'items': [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
            },
            {
              'items': [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
            }
          ]
        },
        'G3X3F': {
          'betType': 'G3X3F',
          'data': [
            {
              'items': [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
              'random': 2
            }
          ]
        },
        'G3X6F': {
          'betType': 'G3X6F',
          'data': [
            {
              'items': [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
              'random': 3
            }
          ]
        },
        'G3TF': {
          'betType': 'G3TF',
          'data': [
            {
              'items': [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27]
            }
          ]
        },
        'G3BF': {
          'betType': 'G3BF',
          'data': [
            {
              'items': [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
            }
          ]
        },
        'S3TDF': {
          'betType': 'S3TDF',
          'data': [
            {
              'items': [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
            }
          ]
        },
        'S3SF': {
          'betType': 'S3SF',
          'data': [
            {
              'items': ['PAIR', 'TRI', 'SN']
            }
          ]
        },
        'N3PM': {
          'betType': 'N3PM',
          'data': [
            {
              'items': [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
            },
            {
              'items': [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
            },
            {
              'items': [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
            }
          ]
        },
        'N3TM': {
          'betType': 'N3TM',
          'data': [
            {
              'items': [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27]
            }
          ]
        },
        'N3DM': {
          'betType': 'N3DM',
          'data': [
            {
              'items': [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
            }
          ]
        },
        'N3CM': {
          'betType': 'N3CM',
          'data': [
            {
              'items': [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
            },
            {
              'items': [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
            },
            {
              'items': [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
            }
          ]
        },
        'G3X3M': {
          'betType': 'G3X3M',
          'data': [
            {
              'items': [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
              'random': 2
            }
          ]
        },
        'G3X6M': {
          'betType': 'G3X6M',
          'data': [
            {
              'items': [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
              'random': 3
            }
          ]
        },
        'G3TM': {
          'betType': 'G3TM',
          'data': [
            {
              'items': [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27]
            }
          ]
        },
        'G3BM': {
          'betType': 'G3BM',
          'data': [
            {
              'items': [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
            }
          ]
        },
        'S3TDM': {
          'betType': 'S3TDM',
          'data': [
            {
              'items': [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
            }
          ]
        },
        'S3SM': {
          'betType': 'S3SM',
          'data': [
            {
              'items': ['PAIR', 'TRI', 'SN']
            }
          ]
        },
        'N3PL': {
          'betType': 'N3PL',
          'data': [
            {
              'items': [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
            },
            {
              'items': [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
            },
            {
              'items': [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
            }
          ]
        },
        'N3TL': {
          'betType': 'N3TL',
          'data': [
            {
              'items': [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27]
            }
          ]
        },
        'N3DL': {
          'betType': 'N3DL',
          'data': [
            {
              'items': [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
            }
          ]
        },
        'N3CL': {
          'betType': 'N3CL',
          'data': [
            {
              'items': [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
            },
            {
              'items': [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
            },
            {
              'items': [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
            }
          ]
        },
        'G3X3L': {
          'betType': 'G3X3L',
          'data': [
            {
              'items': [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
              'random': 2
            }
          ]
        },
        'G3X6L': {
          'betType': 'G3X6L',
          'data': [
            {
              'items': [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
              'random': 3
            }
          ]
        },
        'G3TL': {
          'betType': 'G3TL',
          'data': [
            {
              'items': [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27]
            }
          ]
        },
        'G3BL': {
          'betType': 'G3BL',
          'data': [
            {
              'items': [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
            }
          ]
        },
        'S3TDL': {
          'betType': 'S3TDL',
          'data': [
            {
              'items': [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
            }
          ]
        },
        'S3SL': {
          'betType': 'S3SM',
          'data': [
            {
              'items': ['PAIR', 'TRI', 'SN']
            }
          ]
        },
        'N2PL': {
          'betType': 'N2PL',
          'data': [
            {
              'items': [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
            },
            {
              'items': [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
            }
          ]
        },
        'N2TL': {
          'betType': 'N2TL',
          'data': [
            {
              'items': [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18]
            }
          ]
        },
        'N2DL': {
          'betType': 'N2DL',
          'data': [
            {
              'items': [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
            }
          ]
        },
        'N2PF': {
          'betType': 'N2PF',
          'data': [
            {
              'items': [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
            },
            {
              'items': [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
            }
          ]
        },
        'N2TF': {
          'betType': 'N2TF',
          'data': [
            {
              'items': [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18]
            }
          ]
        },
        'N2DF': {
          'betType': 'N2DF',
          'data': [
            {
              'items': [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
            }
          ]
        },
        'G2L': {
          'betType': 'G2L',
          'data': [
            {
              'items': [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
              'random':2
            }
          ]
        },
        'G2TL': {
          'betType': 'G2TL',
          'data': [
            {
              'items': [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17]
            }
          ]
        },
        'G2BL': {
          'betType': 'G2BL',
          'data': [
            {
              'items': [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
            }
          ]
        },
        'G2F': {
          'betType': 'G2F',
          'data': [
            {
              'items': [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
              'random': 2
            }
          ]
        },
        'G2TF': {
          'betType': 'G2TF',
          'data': [
            {
              'items': [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17]
            }
          ]
        },
        'G2BF': {
          'betType': 'G2BF',
          'data': [
            {
              'items': [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
            }
          ]
        },
        'N1': {
          'betType': 'G2BF',
          'data': [
            {
              'items': [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
            },
            {
              'items': [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
            },
            {
              'items': [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
            },
            {
              'items': [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
            },
            {
              'items': [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
            }
          ]
        },
        'A1L3': {
          'betType': 'A1L3',
          'data': [
            {
              'items': [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
            }
          ]
        },
        'A2L3': {
          'betType': 'A2L3',
          'data': [
            {
              'items': [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
              'random': 2
            }
          ]
        },
        'A1F3': {
          'betType': 'A1F3',
          'data': [
            {
              'items': [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
            }
          ]
        },
        'A2F3': {
          'betType': 'A2F3',
          'data': [
            {
              'items': [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
              'random': 2
            }
          ]
        },
        'A1M3': {
          'betType': 'A1M3',
          'data': [
            {
              'items': [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
            }
          ]
        },
        'A2M3': {
          'betType': 'A2M3',
          'data': [
            {
              'items': [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
              'random': 2
            }
          ]
        },
        'A1L4': {
          'betType': 'A1L4',
          'data': [
            {
              'items': [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
            }
          ]
        },
        'A2L4': {
          'betType': 'A2M3',
          'data': [
            {
              'items': [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
              'random': 2
            }
          ]
        },
        'A2N5': {
          'betType': 'A2N5',
          'data': [
            {
              'items': [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
              'random': 2
            }
          ]
        },
        'A3N5': {
          'betType': 'A3N5',
          'data': [
            {
              'items': [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
              'random': 3
            }
          ]
        },
        'BSOEL2': {
          'betType': 'BSOEL2',
          'data': [
            {
              'items': ["Big", "Small", "Odd", "Even"]
            },
            {
              'items': ["Big", "Small", "Odd", "Even"]
            }
          ]
        },
        'BSOEL3': {
          'betType': 'BSOEL3',
          'data': [
            {
              'items': ["Big", "Small", "Odd", "Even"]
            },
            {
              'items': ["Big", "Small", "Odd", "Even"]
            },
            {
              'items': ["Big", "Small", "Odd", "Even"]
            }
          ]
        },
        'BSOEF2': {
          'betType': 'BSOEF2',
          'data': [
            {
              'items': ["Big", "Small", "Odd", "Even"]
            },
            {
              'items': ["Big", "Small", "Odd", "Even"]
            }
          ]
        },
        'BSOEF3': {
          'betType': 'BSOEF3',
          'data': [
            {
              'items': ["Big", "Small", "Odd", "Even"]
            },
            {
              'items': ["Big", "Small", "Odd", "Even"]
            },
            {
              'items': ["Big", "Small", "Odd", "Even"]
            }
          ]
        },
        'BSOEM3': {
          'betType': 'BSOEM3',
          'data': [
            {
              'items': ["Big", "Small", "Odd", "Even"]
            },
            {
              'items': ["Big", "Small", "Odd", "Even"]
            },
            {
              'items': ["Big", "Small", "Odd", "Even"]
            }
          ]
        },
        //五码趣味三星
        'F5N3': {
          'betType': 'F5N3',
          'data': [
            {
              'items': ['Small', 'Big']
            },
            {
              'items': ['Small', 'Big']
            },
            {
              'items': [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
            },
            {
              'items': [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
            },
            {
              'items': [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
            }
          ]
        },
        'F4N3': {
          'betType': 'F4N3',
          'data': [
            {
              'items': ['Small', 'Big']
            },
            {
              'items': [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
            },
            {
              'items': [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
            },
            {
              'items': [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
            }
          ]
        },
        'F3N2L': {
          'betType': 'F3N2L',
          'data': [
            {
              'items': ['Small', 'Big']
            },
            {
              'items': [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
            },
            {
              'items': [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
            },
          ]
        },
        'F3N2F': {
          'betType': 'F3N2F',
          'data': [
            {
              'items': ['Small', 'Big']
            },
            {
              'items': [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
            },
            {
              'items': [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
            },
          ]
        },
        'F3N2M': {
          'betType': 'F3N2M',
          'data': [
            {
              'items': ['Small', 'Big']
            },
            {
              'items': [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
            },
            {
              'items': [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
            },
          ]
        },

        'R5N3': {
          'betType': 'R5N3',
          'data': [
            {
              'items': ['R1', 'R2', 'R3', 'R4', 'R5']
            },
            {
              'items': ['R1', 'R2', 'R3', 'R4', 'R5']
            },
            {
              'items': [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
            },
            {
              'items': [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
            },
            {
              'items': [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
            }
          ]
        },
        'R4N3': {
          'betType': 'R4N3',
          'data': [
            {
              'items': ['R1', 'R2', 'R3', 'R4', 'R5']
            },
            {
              'items': [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
            },
            {
              'items': [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
            },
            {
              'items': [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
            }
          ]
        },
        'R3N2L': {
          'betType': 'R3N2L',
          'data': [
            {
              'items': ['R1', 'R2', 'R3', 'R4', 'R5']
            },
            {
              'items': [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
            },
            {
              'items': [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
            }
          ]
        },
        'R3N2F': {
          'betType': 'R3N2F',
          'data': [
            {
              'items': ['R1', 'R2', 'R3', 'R4', 'R5']
            },
            {
              'items': [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
            },
            {
              'items': [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
            }
          ]
        },
        'R3N2M': {
          'betType': 'R3N2M',
          'data': [
            {
              'items': ['R1', 'R2', 'R3', 'R4', 'R5']
            },
            {
              'items': [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
            },
            {
              'items': [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
            }
          ]
        },
        'SA1': {
          'betType': 'SA1',
          'data': [
            {
              'items': [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
            }
          ]
        },
        'SA2': {
          'betType': 'SA2',
          'data': [
            {
              'items': [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
            }
          ]
        },
        'SA3': {
          'betType': 'SA3',
          'data': [
            {
              'items': [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
            }
          ]
        },
        'SA4': {
          'betType': 'SA4',
          'data': [
            {
              'items': [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
            }
          ]
        },
        'A2P': {
          'betType': 'A2P',
          'data': [
            {
              'items': [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
            },
            {
              'items': [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
            },
            {
              'items': [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
            },
            {
              'items': [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
            },
            {
              'items': [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
            }
          ]
        },
        'A2T': {
          'betType': 'A2T',
          'data': [
            {
              'items': [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18]
            },
            {
              'items': ["5th", "4th", "3rd", "2nd", "1st"],
              'random': 2
            }
          ]
        },
        'A2G2': {
          'betType': 'A2G2',
          'data': [
            {
              'items': [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
              'random': 2
            },
            {
              'items': ["5th", "4th", "3rd", "2nd", "1st"],
              'random': 2
            }
          ]
        },
        'A2G2T': {
          'betType': 'A2G2T',
          'data': [
            {
              'items': [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17]
            },
            {
              'items': ["5th", "4th", "3rd", "2nd", "1st"],
              'random': 2
            }
          ]
        },
        'A3P': {
          'betType': 'A3P',
          'data': [
            {
              'items': [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
            },
            {
              'items': [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
            },
            {
              'items': [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
            },
            {
              'items': [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
            },
            {
              'items': [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
            }
          ]
        },
        'A3T': {
          'betType': 'A2G2T',
          'data': [
            {
              'items': [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27]
            },
            {
              'items': ["5th", "4th", "3rd", "2nd", "1st"],
              'random': 3
            }
          ]
        },
        'A3G3X3': {
          'betType': 'A3G3X3',
          'data': [
            {
              'items': [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
              'random': 2
            },
            {
              'items': ["5th", "4th", "3rd", "2nd", "1st"],
              'random': 3
            }
          ]
        },
        'A3G3X6': {
          'betType': 'A3G3X6',
          'data': [
            {
              'items': [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
              'random': 3
            },
            {
              'items': ["5th", "4th", "3rd", "2nd", "1st"],
              'random': 3
            }
          ]
        },

        'A3G3T': {
          'betType': 'A3G3T',
          'data': [
            {
              'items': [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26]
            },
            {
              'items': ["5th", "4th", "3rd", "2nd", "1st"],
              'random': 3
            }
          ]
        },
        'A4P': {
          'betType': 'A4P',
          'data': [
            {
              'items': [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
            },
            {
              'items': [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
            },
            {
              'items': [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
            },
            {
              'items': [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
            },
            {
              'items': [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
            }
          ]
        },
        //任选组选24
        'A4G4X24': {
          'betType': 'A4G4X24',
          'data': [
            {
              'items': [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
              'random': 4
            },
            {
              'items': ["5th", "4th", "3rd", "2nd", "1st"],
              'random': 4
            }
          ]
        },
        'A4G4X12': {
          'betType': 'A4G4X12',
          'data': [
            {
              'items': [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
            },
            {
              'items': [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
              'random': 2
            },
            {
              'items': ["5th", "4th", "3rd", "2nd", "1st"],
              'random': 4
            }
          ],
          repeat: true
        },
        'A4G4X6': {
          'betType': 'A4G4X6',
          'data': [
            {
              'items': [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
              'random': 2
            },
            {
              'items': ["5th", "4th", "3rd", "2nd", "1st"],
              'random': 4
            }
          ]
        },
        'A4G4X4': {
          'betType': 'A4G4X4',
          'data': [
            {
              'items': [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
            },
            {
              'items': [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
            },
            {
              'items': ["5th", "4th", "3rd", "2nd", "1st"],
              'random': 4
            }
          ],
          repeat: true
        },
        'LH54': {
          'betType': 'LH54',
          'data': [
            {
              'items': ["L", "H", "T"]
            }
          ]
        },
        'LH53': {
          'betType': 'LH53',
          'data': [
            {
              'items': ["L", "H", "T"]
            }
          ]
        },
        'LH52': {
          'betType': 'LH52',
          'data': [
            {
              'items': ["L", "H", "T"]
            }
          ]
        },
        'LH51': {
          'betType': 'LH51',
          'data': [
            {
              'items': ["L", "H", "T"]
            }
          ]
        },
        'LH43': {
          'betType': 'LH51',
          'data': [
            {
              'items': ["L", "H", "T"]
            }
          ]
        },
        'LH42': {
          'betType': 'LH42',
          'data': [
            {
              'items': ["L", "H", "T"]
            }
          ]
        },
        'LH41': {
          'betType': 'LH41',
          'data': [
            {
              'items': ["L", "H", "T"]
            }
          ]
        },
        'LH32': {
          'betType': 'LH32',
          'data': [
            {
              'items': ["L", "H", "T"]
            }
          ]
        },
        'LH31': {
          'betType': 'LH31',
          'data': [
            {
              'items': ["L", "H", "T"]
            }
          ]
        },
        'LH21': {
          'betType': 'LH21',
          'data': [
            {
              'items': ["L", "H", "T"]
            }
          ]
        }
      },
      HL11x5: {
        'N3PH': {
          'betType': 'N3PH',
          'data': [
            {
              'items': ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11"]
            },
            {
              'items': ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11"]
            },
            {
              'items': ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11"]
            }
          ],
          repeat:true
        },
        'G3H': {
          'betType': 'G3H',
          'data': [
            {
              'items': ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11"],
              "random": 3
            }
          ]
        },
        'G3BH': {
          'betType': 'G3BH',
          'data': [
            {
              'items': ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11"]
            },
            {
              'items': ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11"],
              "random": 2
            }
          ],
          repeat: true
        },

        'N2PH': {
          'betType': 'N2PH',
          'data': [
            {
              'items': ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11"]
            },
            {
              'items': ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11"],
            }
          ],
          repeat: true
        },
        'G2H': {
          'betType': 'G2H',
          'data': [
            {
              'items': ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11"],
              "random": 2
            }
          ]
        },
        'G2BH': {
          'betType': 'G2BH',
          'data': [
            {
              'items': ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11"]
            },
            {
              'items': ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11"]
            }
          ],
          repeat: true
        },
        'A1H3': {
          'betType': 'A1H3',
          'data': [
            {
              'items': ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11"],
            }
          ]
        },
        'FOEC': {
          'betType': 'FOEC',
          'data': [
            {
              'items': ["O5E0", "O4E1", "O3E2", "O2E3", "O1E4", "O0E5"]
            }
          ]
        },
        'FMN': {
          'betType': 'FMN',
          'data': [
            {
              'items': ["03", "04", "05", "06", "07", "08", "09"]
            }
          ]
        },
        'P3': {
          'betType': 'P3',
          'data': [
            {
              'items': ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11"]
            },
            {
              'items': ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11"]
            },
            {
              'items': ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11"]
            }
          ]
        },
        'A1': {
          'betType': 'A1',
          'data': [
            {
              'items': ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11"]
            }
          ]
        },
        'A2': {
          'betType': 'A2',
          'data': [
            {
              'items': ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11"],
              "random": 2
            }
          ]
        },
        "A3": {
          'betType': 'A2',
          'data': [
            {
              'items': ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11"],
              "random": 3
            }
          ]
        },
        "A4": {
          'betType': 'A4',
          'data': [
            {
              'items': ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11"],
              "random": 4
            }
          ]
        },
        "A5": {
          'betType': 'A5',
          'data': [
            {
              'items': ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11"],
              "random": 5
            }
          ]
        },
        "A6": {
          'betType': 'A6',
          'data': [
            {
              'items': ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11"],
              "random": 6
            }
          ]
        },
        "A7": {
          'betType': 'A7',
          'data': [
            {
              'items': ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11"],
              "random": 7
            }
          ]
        },
        "A8": {
          'betType': 'A8',
          'data': [
            {
              'items': ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11"],
              "random": 8
            }
          ]
        },
        "A2B": {
          'betType': 'A2B',
          'data': [
            {
              'items': ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11"]
            },
            {
              'items': ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11"]
            }
          ],
          repeat: true
        },
        "A3B": {
          'betType': 'A3B',
          'data': [
            {
              'items': ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11"]
            },
            {
              'items': ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11"],
              'random': 2
            }
          ],
          repeat: true
        },
        'A4B': {
          'betType': 'A3B',
          'data': [
            {
              'items': ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11"]
            },
            {
              'items': ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11"],
              'random': 3
            }
          ],
          repeat: true
        },
        'A5B': {
          'betType': 'A5B',
          'data': [
            {
              'items': ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11"]
            },
            {
              'items': ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11"],
              'random': 4
            }
          ],
          repeat: true
        },
        'A6B': {
          'betType': 'A6B',
          'data': [
            {
              'items': ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11"]
            },
            {
              'items': ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11"],
              'random': 5
            }
          ],
          repeat: true
        },
        'A7B': {
          'betType': 'A7B',
          'data': [
            {
              'items': ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11"]
            },
            {
              'items': ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11"],
              'random': 6
            }
          ],
          repeat: true
        },
        'A8B': {
          'betType': 'A8B',
          'data': [
            {
              'items': ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11"]
            },
            {
              'items': ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11"],
              'random': 7
            }
          ],
          repeat: true
        }
      },
      K3: {
        'N3T': {
          'betType': 'N3T',
          'data': [
            {
              'items': ["03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18"]
            }
          ]
        },
        'N3D': {
          'betType': 'N3D',
          'data': [
            {
              'items': ["123", "125", "134", "136", "145", "124", "126", "135", "146", "156", "236", "234", "246", "356", "345", "245", "235", "256", "346", "456"]
            }
          ]
        },
        'N3TRI': {
          'betType': 'N3TRI',
          'data': [
            {
              'items': ["666", "555", "444", "333", "222", "111"]
            }
          ]
        },
        'N3SN': {
          'betType': 'N3SN',
          'data': [
            {
              'items': ["123", "234", "345", "456"]
            }
          ]
        },
        'N2D': {
          'betType': 'N2D',
          'data': [
            {
              'items': ["12", "15", "24", "34", "45", "13", "16", "25", "35", "46", "14", "23", "26", "36", "56"]
            }
          ]
        },
        'N3PAIR': {
          'betType': 'N3PAIR',
          'data': [
            {
              'items': ["112", "113", "114", "115", "116", "122", "223", "224", "225", "226", "133", "233", "334", "335", "336", "144", "244", "344", "445", "446", "155", "255", "355", "455", "556", "166", "266", "366", "466", "566"]
            }
          ]
        },
        'N1': {
          'betType': 'N1',
          'data': [
            {
              'items': ["1", "2", "3", "4", "5", "6"]
            }
          ]
        }
      }
    };
    var getRandom = function(gameCode,betType){
      var random = [];
      var dataRandom = obj[gameCode][betType];
      for(var a = 0; a < dataRandom.data.length; a ++ ){
        if(dataRandom.repeat && a == 1){
          random.push(RandomNum(dataRandom.data[a].random,dataRandom.data[a].items.length,random[0]))
        }else if(dataRandom.repeat && a == 2){
          var list =  (random[0].toString() +','+ random[1].toString()).split(',');
          random.push(RandomNum(dataRandom.data[a].random,dataRandom.data[a].items.length,list))
        }else{
          random.push(RandomNum(dataRandom.data[a].random,dataRandom.data[a].items.length,[]))
        }
      }
      for(var x = 0; x < random.length; x ++ ){
        for(var y = 0; y < random[x].length; y++ ){
          random[x][y] = dataRandom.data[x].items[random[x][y]].toString();
        }
      }
      return random;
    };
    var RandomNum = function(Number,length,isRepeat){
      Number = Number || 1;
      isRepeat = isRepeat.toString().split(',');
      var num = [];
      for(var i = 0;;i++){
        var a = Math.floor(Math.random() * parseInt(length));
        if(num.indexOf(a) < 0 && isRepeat.indexOf(a.toString()) < 0){
          num.push(a);
        }
        if(num.length == Number){
          break;
        }
      }
     return num;
    };
    return {
      getRandom:getRandom
    }
  };
  return factory;
});
