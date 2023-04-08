import {
    useRecoilState,
    atom
} from 'recoil';
import {textIconIconSizeIndexState} from './textIconPair';
import scaleMethodOptions from '../utilities/scaleMethodOptions';

const [textIconIconSizeIndex, setTextIconIconSizeIndex] = useRecoilState(textIconIconSizeIndexState);

const baseIconSizeIndexState = atom({
    key: 'baseIconSizeIndex',
    default: textIconIconSizeIndex
})
const baseComponentSizeIndexState = atom({
    key: 'baseComponentSizeIndex',
    default: 1
})
const componentLineHeightState = atom({
    key: "componentLineHeight",
    default: 1.2
})
const componentSmallQuantityState = atom({
    key: 'componentSmallQuantity',
    default: 2
})
const componentLargeQuantityState = atom({
    key: 'componentLargeQuantity',
    default: 4
})
// was componentScaleMethod
const componentMinHeightMethodOptionState = atom({
    key: 'componentMinHeightMethodOption',
    default: scaleMethodOptions[1]
})
const componentPaddingMethodOptionState = atom({
    key: 'componentPaddingMethodOption',
    default: scaleMethodOptions[0]
})
const baseComponentTextSizeIndexState = atom({
    key: 'baseComponentTextSizeIndex',
    default: 0
})
const baseComponentPaddingXIndexState = atom({
    key: 'baseComponentPaddingXIndex',
    default: 0
})
const baseComponentPaddingYIndexState = atom({
    key: 'baseComponentPaddingYIndex',
    default: 0
})
const scaleComponentRadiusState = atom({
    key: 'scaleComponentRadius',
    default: false
})
const baseComponentRadiusState = atom({
    key: 'baseComponentRadius',
    default: 0
})
