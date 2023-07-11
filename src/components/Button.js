import classNames from "classnames";

function Button({children, variant='default'}){  //children jsx içerisindeki yazı yada etiketler
    return (
        <button className={classNames({
            "p-4 m-1 h-10 flex items-center rounded border-1":true, //true: yani bu her türlü uygulanacak koşul ne olursa olsun
            "bg-gray-300": variant==='default',  //variant 'default' ise bu uygulansın
            "bg-green-600 text-white": variant==='success',  //variant 'success' ise bu uygulansın
            "bg-yellow-400 text-yellow-800": variant==='warning',
            "bg-red-600 text-white": variant==='danger',
        })}>{children}</button>
    )
}

export default Button