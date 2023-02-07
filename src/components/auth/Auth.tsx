import { ChangeEvent, FormEvent, useState } from "react";

export default function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const {
      target: { name, value },
    } = e;
    if (name === "password") setPassword(value);
    if (name === "email") setEmail(value);
  };
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div>
      <form className="w-full flex flex-col text-center" onSubmit={onSubmit}>
        <input
          className="text-center py-2 border-b-2 border-cyan-900"
          type="email"
          name="email"
          placeholder="이메일"
          value={email}
          onChange={onChange}
          required
        />
        <input
          className="text-center py-2 border-b-2 border-cyan-900"
          type="password"
          name="password"
          placeholder="비밀번호"
          value={password}
          onChange={onChange}
          required
        />
        <input
          className="text-center py-2 border-b-2 border-cyan-900"
          type="sumbit"
          value="로그인"
        />
      </form>
      <div className="flex justify-center gap-6">
        <button className="my-6 px-4 bg-slate-500 text-cyan-50">구글</button>
        <button className="my-6 px-4 bg-slate-500 text-cyan-50">깃헙</button>
      </div>
    </div>
  );
}
