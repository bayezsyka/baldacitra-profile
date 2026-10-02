<?php

namespace Tests\Feature;

use App\Models\ContactMessage;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class PublicPagesTest extends TestCase
{
    use RefreshDatabase;

    public function test_home_page_can_be_rendered(): void
    {
        $response = $this->get('/');
        $response->assertStatus(200);
    }

    public function test_profil_page_can_be_rendered(): void
    {
        $response = $this->get('/profil');
        $response->assertStatus(200);
    }

    public function test_umrah_page_can_be_rendered(): void
    {
        $response = $this->get('/umrah');
        $response->assertStatus(200);
    }

    public function test_haji_page_can_be_rendered(): void
    {
        $response = $this->get('/haji');
        $response->assertStatus(200);
    }

    public function test_galeri_page_can_be_rendered(): void
    {
        $response = $this->get('/galeri');
        $response->assertStatus(200);
    }

    public function test_kontak_page_can_be_rendered(): void
    {
        $response = $this->get('/kontak');
        $response->assertStatus(200);
    }

    public function test_contact_form_submission_stores_message(): void
    {
        $response = $this->post('/kontak', [
            'nama' => 'H. Fulan',
            'telepon' => '081299887766',
            'email' => 'fulan@example.com',
            'paket' => 'Haji Khusus 2026',
            'pesan' => 'Mohon informasi pendaftaran haji khusus.',
        ]);

        $response->assertRedirect();
        $this->assertDatabaseHas('contact_messages', [
            'name' => 'H. Fulan',
            'phone' => '081299887766',
            'package' => 'Haji Khusus 2026',
        ]);
    }
}
