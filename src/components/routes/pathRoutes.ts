import {Home} from '../../pages/Home/Home'
import {FC} from 'react'
import {EditGradient} from '../../pages/edit/EditGradient'
import {AddNewColorModal} from '../AddNewColorModal/AddNewColorModal'

export enum PATH {
    HOME = '/',
    NEW = '/new',
    EDIT = '/edit/:id'
}

type Routes = {
    path: string,
    component: FC<any>
    exact?: boolean
}

export const pathRoutes: Routes[] = [
    {path: PATH.HOME, component: Home, exact: true},
    {path: PATH.NEW, component: AddNewColorModal},
    {path: PATH.EDIT, component: EditGradient},

]