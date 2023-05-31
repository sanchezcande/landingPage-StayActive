import classes from './Layout.module.css'
import NavBar from './NavBar'


function Layout(props){
    return <div className={classes.main}>
        <NavBar/>
        <main >
            {props.children}
        </main>
        
    </div>
}

export default Layout 