"use client";
import { Tabs, Tab, Input, Link, Button, Card, CardBody } from "@heroui/react";
import { useState } from "react";
import { Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useMutate } from "@/services/QueryHandler";
import { useRouter } from "next/navigation";

const loginSchema = Yup.object({
  email: Yup.string()
    .email("فرمت ایمیل صحیح نیست")
    .required("ایمیل الزامی است"),
  password: Yup.string()
    .min(8, "رمز عبور باید حداقل 8 کاراکتر باشد")
    .required("رمز عبور الزامی است"),
});
const signUpSchema = Yup.object({
  name: Yup.string().required("نام و نام خانوادگی الزامی است"),
  email: Yup.string()
    .email("فرمت ایمیل صحیح نیست")
    .required("ایمیل الزامی است"),
  password: Yup.string()
    .min(8, "رمز عبور باید حداقل 8 کاراکتر باشد")
    .required("رمز عبور الزامی است"),
});
export default function Auth() {
  const route = useRouter();
  const [selected, setSelected] = useState("login");
  const { mutate: signin, isPending: LoadingSignin } = useMutate({
    url: "user/signin",
    method: "post",
    successCallback() {
      route.push("/blogs");
    },
  });
  const { mutate: signup, isPending: LoadingSignup } = useMutate({
    url: "user/signup",
    method: "post",
    successCallback() {
      setSelected("login");
    },
  });

  return (
    <div className="flex w-full items-center justify-center min-h-screen">
      <Card className="max-w-full w-[340px] max-h-full h-[500px]">
        <CardBody className="overflow-hidden">
          <Tabs
            color="primary"
            fullWidth
            aria-label="Tabs form"
            selectedKey={selected}
            size="lg"
            onSelectionChange={setSelected}
          >
            <Tab
              className="h-full  flex flex-col !outline-0"
              key="login"
              title="ورود"
            >
              <Formik
                initialValues={{ email: "", password: "" }}
                validationSchema={loginSchema}
                onSubmit={(values) => {
                  signin({ query: values });
                }}
              >
                {({ values, handleChange, errors, touched, handleBlur }) => (
                  <Form
                    autoComplete="off"
                    className="flex  mt-2 justify-between h-full flex-col gap-6"
                  >
                    <div className="space-y-5">
                      <Input
                        name="email"
                        label="ایمیل"
                        variant="underlined"
                        className="text-right"
                        size="sm"
                        isRequired
                        value={values.email}
                        autoComplete="new-email"
                        dir="lft"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        isInvalid={touched.email && Boolean(errors.email)}
                        errorMessage={touched.email && errors.email}
                      />

                      <Input
                        name="password"
                        label="رمز عبور"
                        autoComplete={false}
                        type="password"
                        variant="underlined"
                        className="text-right"
                        autoComplete="new-password"
                        size="sm"
                        dir="lft"
                        isRequired
                        value={values.password}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        isInvalid={touched.password && Boolean(errors.password)}
                        errorMessage={touched.password && errors.password}
                      />
                    </div>
                    <div className="flex flex-col gap-5">
                      <p className="text-center text-small">
                        <span>نیاز به ایجاد حساب کاربری؟ </span>
                        <Link
                          className="cursor-pointer"
                          size="sm"
                          onPress={() => setSelected("sign-up")}
                        >
                          ثبت نام
                        </Link>
                      </p>
                      <Button
                        isLoading={LoadingSignin}
                        type="submit"
                        fullWidth
                        color="primary"
                        className="flex-row-reverse gap-5"
                      >
                        ورود
                      </Button>
                    </div>
                  </Form>
                )}
              </Formik>
            </Tab>
            <Tab
              className="h-full !outline-0 flex flex-col"
              key="sign-up"
              title="ثبت نام"
            >
              <Formik
                initialValues={{ name: "", email: "", password: "" }}
                validationSchema={signUpSchema}
                onSubmit={(values) => {
                  signup({ query: values });
                }}
              >
                {({ values, handleChange, errors, touched, handleBlur }) => (
                  <Form
                    autoComplete="off"
                    className="flex  mt-2 justify-between h-full flex-col gap-6"
                  >
                    <div className="space-y-5">
                      <Input
                        name="name"
                        label="نام و نام خانوادگی"
                        variant="underlined"
                        className="text-right"
                        size="sm"
                        dir="lft"
                        isRequired
                        value={values.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        isInvalid={touched.name && Boolean(errors.name)}
                        errorMessage={touched.name && errors.name}
                      />
                      <Input
                        name="email"
                        label="ایمیل"
                        variant="underlined"
                        size="sm"
                        autoComplete="new-password"
                        dir="lft"
                        className="text-right"
                        isRequired
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        isInvalid={touched.email && Boolean(errors.email)}
                        errorMessage={touched.email && errors.email}
                      />
                      <Input
                        name="password"
                        label="رمز عبور"
                        type="password"
                        variant="underlined"
                        size="sm"
                        autoComplete="new-password"
                        className="text-right"
                        isRequired
                        dir="lft"
                        value={values.password}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        isInvalid={touched.password && Boolean(errors.password)}
                        errorMessage={touched.password && errors.password}
                      />
                    </div>
                    <div className="flex flex-col gap-5">
                      <p className="text-center text-small">
                        <span>آیا قبلاً ثبت نام کرده‌اید؟ </span>
                        <Link
                          className="cursor-pointer"
                          size="sm"
                          onPress={() => setSelected("login")}
                        >
                          ورود
                        </Link>
                      </p>
                      <Button
                        isLoading={LoadingSignup}
                        type="submit"
                        fullWidth
                        className="gap-5 flex-row-reverse"
                        color="primary"
                      >
                        ثبت نام
                      </Button>
                    </div>
                  </Form>
                )}
              </Formik>
            </Tab>
          </Tabs>
        </CardBody>
      </Card>
    </div>
  );
}
