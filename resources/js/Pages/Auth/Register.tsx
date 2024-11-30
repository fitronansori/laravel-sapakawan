import InputError from '@/components/InputError';
import { Button } from '@/components/ui/button';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import GuestLayout from '@/layouts/GuestLayout';
import { Head, Link, useForm } from '@inertiajs/react';
import { FormEventHandler } from 'react';

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post(route('register'), {
            onFinish: () => reset('password', 'password_confirmation'),
        });
    };

    return (
        <GuestLayout>
            <Head title="Register" />

            <div className="grid min-h-screen grid-cols-2">
                <div className="flex items-center justify-center bg-primary">
                    <img
                        src="/assets/images/register.svg"
                        alt=""
                        className="size-[500px]"
                    />
                </div>

                <div className="flex items-center justify-center">
                    <Card className="w-[400px]">
                        <CardHeader>
                            <CardTitle>Login Sapa Kawan</CardTitle>
                            <CardDescription>
                                Selamat datang kembali, silahkan login
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="pb-0">
                            <form onSubmit={submit}>
                                <div>
                                    <Label htmlFor="name">Name</Label>

                                    <Input
                                        id="name"
                                        name="name"
                                        value={data.name}
                                        onChange={(e) =>
                                            setData('name', e.target.value)
                                        }
                                        required
                                    />

                                    <InputError
                                        message={errors.name}
                                        className="mt-2"
                                    />
                                </div>

                                <div className="mt-4">
                                    <Label htmlFor="email">Email</Label>

                                    <Input
                                        id="email"
                                        type="email"
                                        name="email"
                                        value={data.email}
                                        onChange={(e) =>
                                            setData('email', e.target.value)
                                        }
                                    />

                                    <InputError
                                        message={errors.email}
                                        className="mt-2"
                                    />
                                </div>

                                <div className="mt-4">
                                    <Label htmlFor="password">Password</Label>

                                    <Input
                                        id="password"
                                        type="password"
                                        name="password"
                                        value={data.password}
                                        onChange={(e) =>
                                            setData('password', e.target.value)
                                        }
                                    />

                                    <InputError
                                        message={errors.password}
                                        className="mt-2"
                                    />
                                </div>

                                <div className="mt-4">
                                    <Label htmlFor="password_confirmation">
                                        Confirm Password
                                    </Label>

                                    <Input
                                        id="password_confirmation"
                                        type="password"
                                        name="password_confirmation"
                                        value={data.password_confirmation}
                                        onChange={(e) =>
                                            setData(
                                                'password_confirmation',
                                                e.target.value,
                                            )
                                        }
                                        required
                                    />

                                    <InputError
                                        message={errors.password_confirmation}
                                        className="mt-2"
                                    />
                                </div>

                                <div className="mt-4 flex flex-col items-center justify-end">
                                    <Button
                                        className="w-full"
                                        disabled={processing}
                                    >
                                        Register
                                    </Button>
                                </div>
                            </form>
                        </CardContent>
                        <CardFooter className="items-center justify-center">
                            <div>
                                Sudah punya akun?
                                <Button
                                    variant={'link'}
                                    className="p-0 text-base"
                                    asChild
                                >
                                    <Link href={route('login')}>Login</Link>
                                </Button>
                            </div>
                        </CardFooter>
                    </Card>
                </div>
            </div>
        </GuestLayout>
    );
}
