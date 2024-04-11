import { useDispatch } from 'react-redux';
import { headerChange } from "../../store/store";

export function HdChange(type, title = '') {
    const dispatch = useDispatch();
    let temp = {
        type: type,
        title: title,
    }

    dispatch(headerChange(temp));
}