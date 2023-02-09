import { authService } from "@/common/fbase";
import { ChangeEvent, FormEvent, useState } from "react";

export default function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newAccount, setNewAccount] = useState(false);
  const [error, setError] = useState("");

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const {
      target: { name, value },
    } = e;
    if (name === "password") setPassword(value);
    if (name === "email") setEmail(value);
  };
  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      let data;
      if (newAccount) {
        data = await authService.createUserWithEmailAndPassword(
          email,
          password
        );
      } else {
        data = await authService.signInWithEmailAndPassword(email, password);
      }

      console.log(data);
    } catch (err: any) {
      setError(err.message);
    }
  };

  const toggleAccount = () => setNewAccount((prev) => !prev);

  return (
    <div>
      <div className="text-center pb-4 mb-4">
        <h1 className="m-common mb-4 text-4xl font-bold">
          {newAccount ? "회원가입" : "로그인"}
        </h1>
        <button
          className="block border-2 px-4 mx-auto border-cyan-900  text-xs"
          onClick={toggleAccount}
        >
          {!newAccount ? "회원가입" : "로그인"}
        </button>
      </div>
      <form className="w-full flex flex-col text-center" onSubmit={onSubmit}>
        <input
          className="text-center py-2 border-b-2 border-cyan-900"
          type="email"
          name="email"
          placeholder="이메일"
          defaultValue={email}
          onChange={onChange}
          required
        />
        <input
          className="text-center py-2 border-b-2 border-cyan-900"
          type="password"
          name="password"
          placeholder="비밀번호"
          defaultValue={password}
          onChange={onChange}
          required
        />
        <input
          className="my-6 px-4 py-2 bg-slate-500 text-cyan-50 text-center"
          type="submit"
          value={newAccount ? "이메일로 가입" : "이메일로 로그인"}
        />
      </form>
      <div className="flex justify-center gap-6">
        <button className="my-6 px-4 bg-slate-500 text-cyan-50">구글</button>
        <button className="my-6 px-4 bg-slate-500 text-cyan-50">깃헙</button>
      </div>
      <p className="h-20">{error}</p>
    </div>
  );
}
