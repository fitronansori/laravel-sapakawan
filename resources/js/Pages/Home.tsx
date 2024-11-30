import { Button } from '@/components/ui/button';
import { PageProps } from '@/types';
import { Head, Link } from '@inertiajs/react';

export default function Welcome({ auth }: PageProps) {
    return (
        <>
            <Head title="Welcome" />
            <header>
                <nav>
                    {auth.user ? (
                        <Button asChild>
                            <Link href={route('dashboard')}>Dashboard</Link>
                        </Button>
                    ) : (
                        <div className="space-x-4">
                            <Button asChild>
                                <Link href={route('login')}>Log in</Link>
                            </Button>

                            <Button asChild>
                                <Link href={route('register')}>Register</Link>
                            </Button>
                        </div>
                    )}
                </nav>
            </header>
        </>
    );
}
