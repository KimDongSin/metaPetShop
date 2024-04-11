import { useDispatch } from 'react-redux';
import { headerChange, menuChange } from "../../store/store";

export function HeaderChange(type, title = '') {
    const dispatch = useDispatch();
    let temp = {
        type: type,
        title: title,
    }

    dispatch(headerChange(temp));
}


export function MenuChange(menu) {
    const dispatch = useDispatch();
    let temp = menu

    dispatch(menuChange(temp));
}

export function init(head, menu, title) {
    HeaderChange(head, title);
    MenuChange(menu);
}