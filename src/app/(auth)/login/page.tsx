import Image from 'next/image';

export default function Login() {
  return (
    <div className="flex items-start justify-center gap-32 min-h-screen max-w-[1192px] mx-auto px-4">
      <div className="flex flex-col items-start gap-6 text-gray-900 pt-10">
        <a href="/">
          <Image
            alt="logo"
            src="https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2F15dbd6657516176587b264f289919587.cdn.bubble.io%2Ff1688160641486x427722554468289000%2FOriginal%2520on%2520Transparent.png?w=384&h=68&auto=compress&dpr=1&fit=max"
            width={340}
            height={60}
          />
        </a>
        <p className="text-2xl self-center mt-10">Log in to DeepWhale AI!</p>
        <form className="mt-8 flex flex-col gap-4 items-center w-full">
          <input type="email" placeholder="Email address" />
          <input type="password" placeholder="Password" />

          <button
            type="submit"
            className="bg-[#239c78] text-white w-full max-w-xs h-12 rounded"
          >
            Log in
          </button>
        </form>

        <div className="flex flex-col gap-2 text-center mx-auto">
          <p>
            Don&apos;t have an account?{' '}
            <a href="#" className="text-green-600">
              Sign up.
            </a>
          </p>
          <p>
            Forgot your password?{' '}
            <a href="#" className="text-green-600">
              Reset password.
            </a>
          </p>
        </div>

        <p className="mx-auto">OR</p>

        <button className="w-full max-w-xs flex items-center justify-center gap-4 text-sm font-bold h-12 rounded transition-all duration-300 outline outline-1 outline-gray-900 hover:outline-gray-500 focus:outline-gray-500 active:outline-gray-400">
          <Image
            alt="google icon"
            src="https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2F15dbd6657516176587b264f289919587.cdn.bubble.io%2Ff1688161413216x540994926412641900%2Fgoogle%2520icon.png?w=48&h=48&auto=compress&dpr=1&fit=max"
            width={40}
            height={40}
            priority
          />
          <span>Continue with Google</span>
        </button>
      </div>
      <Image
        alt=""
        src="https://15dbd6657516176587b264f289919587.cdn.bubble.io/f1689693336032x950060263621767200/Component%201%20%283%29.svg"
        width={408}
        height={765}
        priority
      />
    </div>
  );
}
