import {FC} from 'react'
import {Route, Switch} from 'react-router-dom'
import {pathRoutes} from './pathRoutes'

export const Routes: FC = () => {

    return (
        <>

            <Switch>
                {pathRoutes.map(r => <Route key={r.path} path={r.path} component={r.component} exact={r.exact}/>)}
            </Switch>
        </>
    )
}