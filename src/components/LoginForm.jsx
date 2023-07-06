import InputButton from './reuseable/InputButton'
import InputText from './reuseable/InputText'
import Button from './reuseable/Button'

const LoginForm = () => {
  return (
    <div className="">
      <form className="flex flex-col gap-10 justify-center min-h-screen pr-32">
        <div className="flex gap-10">
          <InputButton name="Teacher" textcolor="text-secondary" background="bg-transparent" border="border-[1px] border-secondary" />
          <InputButton name="Admin" textcolor="text-secondary" background="bg-transparent" border="border-[1px] border-secondary" />
        </div>
        <div className="flex flex-col gap-6">
          <InputText name="username" label="Username" type="text" />
          <InputText name="password" label="Password" type="password" />
        </div>
        <div className="flex flex-col items-start gap-4">
          <div className="flex items-center text-sm gap-2">
            <input className="rounded" type="checkbox" /> <span>Remember me</span>
          </div>
          <Button type="submit">Sign In</Button>
          <a className="text-slate-500 text-xs font-normal" href="/">Forgot Password ?</a>
          <p className="text-sm">Dont have an account? <a className="text-blue-400" href="/">Register Here</a></p>
        </div>
      </form>
    </div>
  )
}

export default LoginForm