'use client'

const SignInButton = () => {
  return (
    <button
      onClick={() => alert('Hey... this is just a demo (nelson)')}
      className='bg-blue-500 text-white ml-2 sm:px-6 px-2 sm:py-2 py-1 font-medium rounded-md hover:brightness-105 hover:shadow-md transition-all whitespace-nowrap'
    >
      Sign in
    </button>
  );
}
export default SignInButton