<?php

namespace Tests\Feature;

use App\Models\User;
use Mockery as m;
use Tests\TestCase;
use Laravel\Socialite\Facades\Socialite;
use PHPUnit\Framework\Assert as PHPUnit;
use Illuminate\Foundation\Testing\TestResponse;
use Laravel\Socialite\Two\User as SocialiteUser;

class OAuthTest extends TestCase
{
    public function setUp()
    {
        parent::setUp();

        TestResponse::macro('assertText', function ($text) {
            PHPUnit::assertTrue(str_contains($this->getContent(), $text), "Expected text [{$text}] not found.");

            return $this;
        });

        TestResponse::macro('assertTextMissing', function ($text) {
            PHPUnit::assertFalse(str_contains($this->getContent(), $text), "Expected missing text [{$text}] found.");

            return $this;
        });
    }

    protected function mockSocialite($provider, $user = null)
    {
        $mock = Socialite::shouldReceive('stateless')
            ->andReturn(m::self())
            ->shouldReceive('driver')
            ->with($provider)
            ->andReturn(m::self());

        if ($user) {
            $mock->shouldReceive('user')
                ->andReturn((new SocialiteUser)->setRaw($user)->map($user));
        } else {
            $mock->shouldReceive('redirect')
                ->andReturn(redirect('https://url-to-provider'));
        }
    }
}
