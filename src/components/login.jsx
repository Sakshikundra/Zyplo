import {Input} from "./ui/input";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import {Button} from "./ui/button";
import {useState} from "react";
import * as Yup from "yup";
import Error from "./error";
import {login} from "@/db/apiAuth";
import {BeatLoader} from "react-spinners";
import useFetch from "@/hooks/use-fetch";
import {UrlState} from "@/context";

const Login = () => {
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const {loading, error, fn: fnLogin, data} = useFetch(login, formData);
  const {fetchUser} = UrlState();

  if (data) {
    fetchUser();
  }

  const handleLogin = async () => {
    setErrors({});
    try {
      const schema = Yup.object({
        email: Yup.string().email().required(),
        password: Yup.string().min(6).required(),
      });

      await schema.validate(formData, {abortEarly: false});
      await fnLogin();
    } catch (e) {
      const errs = {};
      e?.inner?.forEach((err) => {
        errs[err.path] = err.message;
      });
      setErrors(errs);
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Login</CardTitle>
        {error && <Error message={error.message} />}
      </CardHeader>

      <CardContent className="space-y-2">
        <Input
          name="email"
          placeholder="Email"
          onChange={(e) =>
            setFormData({...formData, email: e.target.value})
          }
        />
        {errors.email && <Error message={errors.email} />}

        <Input
          name="password"
          type="password"
          placeholder="Password"
          onChange={(e) =>
            setFormData({...formData, password: e.target.value})
          }
        />
        {errors.password && <Error message={errors.password} />}
      </CardContent>

      <CardFooter>
        <Button onClick={handleLogin} disabled={loading}>
          {loading ? <BeatLoader size={10} /> : "Login"}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default Login;
