// Local imports
import { type CustomBool } from './CustomBool'
import { type CustomColor } from './CustomColor'
import { type CustomFloat } from './CustomFloat'
import { type CustomFile } from './CustomFile'
import { type CustomInt } from './CustomInt'
import { type CustomObject } from './CustomObject'
import { type CustomString } from './CustomString'





export type CustomProperties = Record<string, CustomBool | CustomColor | CustomFloat | CustomFile | CustomInt | CustomObject | CustomString>
