import {Home} from '../../pages/Home/Home'
import {FC} from 'react'
import {AddNewGradient} from '../../pages/new/AddNewGradient'
import {EditGradient} from '../../pages/edit/EditGradient'

export enum PATH {
    HOME = '/',
    NEW = '/new',
    EDIT = '/edit/:id'
}

type Routes = {
    path: string,
    component: FC
    exact?: boolean
}

export const pathRoutes: Routes[] = [
    {path: PATH.HOME, component: Home, exact: true},
    {path: PATH.NEW, component: AddNewGradient},
    {path: PATH.EDIT, component: EditGradient},

]