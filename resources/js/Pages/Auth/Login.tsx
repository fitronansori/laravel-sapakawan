import Checkbox from '@/components/Checkbox';
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

export default function Login({
    status,
    canResetPassword,
}: {
    status?: string;
    canResetPassword: boolean;
}) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post(route('login'), {
            onFinish: () => reset('password'),
        });
    };

    return (
        <GuestLayout>
            <Head title="Log in" />
            {status && (
                <div className="mb-4 text-sm font-medium text-green-600">
                    {status}
                </div>
            )}

            <div className="grid min-h-screen grid-cols-2">
                <div className="flex items-center justify-center bg-primary">
                    <img
                        src="/assets/images/login.svg"
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

                                <div className="mt-4 block">
                                    <label className="flex items-center">
                                        <Checkbox
                                            name="remember"
                                            checked={data.remember}
                                            onChange={(e) =>
                                                setData(
                                                    'remember',
                                                    e.target.checked,
                                                )
                                            }
                                        />
                                        <span className="ms-2 text-sm text-gray-600">
                                            Remember me
                                        </span>
                                    </label>
                                </div>

                                <div className="mt-4 flex flex-col items-center justify-end">
                                    <Button
                                        className="w-full"
                                        disabled={processing}
                                    >
                                        Log in
                                    </Button>

                                    {canResetPassword && (
                                        <Button
                                            variant={'link'}
                                            className="w-full"
                                            asChild
                                        >
                                            <Link
                                                href={route('password.request')}
                                            >
                                                Lupa password?
                                            </Link>
                                        </Button>
                                    )}
                                </div>
                            </form>
                        </CardContent>
                        <CardFooter className="items-center justify-center">
                            <div>
                                Belum punya akun?{' '}
                                <Button
                                    variant={'link'}
                                    className="p-0 text-base"
                                    asChild
                                >
                                    <Link href={route('register')}>
                                        Register
                                    </Link>
                                </Button>
                            </div>
                        </CardFooter>
                    </Card>
                </div>
            </div>
        </GuestLayout>
    );
}
