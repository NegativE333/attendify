

const AuthLayout = ({
    children
} : {children : React.ReactNode}) => {
    return (  
        <div className="h-full flex items-center justify-center">
            <div className="absolute top-0 z-[-2] h-screen w-screen rotate-180 transform bg-white bg-[radial-gradient(60%_120%_at_50%_50%,hsla(0,0%,100%,0)_0,rgba(255,171,87,.4)_100%)]"></div>
            <div className="z-10">
                {children}
            </div>
        </div>
    );
}
 
export default AuthLayout;