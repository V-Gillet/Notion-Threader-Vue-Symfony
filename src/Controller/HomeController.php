<?php

namespace App\Controller;

use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class HomeController extends AbstractController
{
    #[Route('/', name: 'app_home',requirements: ['route'=>"^(?!.*_wdt|_profiler).+"])]
    public function index(): Response
    {
        return $this->render('base.html.twig');
    }

    #[Route('/api/helloword/{name}', name: 'api_helloword')]
    public function apiHelloword(string $name): Response
    {
        return new JsonResponse('hello ' . $name);
    }
}
