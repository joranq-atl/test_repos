<?php

namespace App;

use App\Utils\Helper;
use App\Utils\DataProcessor;

function runApplication() {
    $processor = new DataProcessor();

    $processor->addData("  hello  ");
    $processor->addData("  world  ");

    $results = $processor->process();

    foreach ($results as $result) {
        echo Helper::formatString($result) . "\n";
    }

    $isValid = $processor->validate("test input");
    echo "Valid: " . ($isValid ? "yes" : "no") . "\n";
}

class Application {
    private $processor;

    public function __construct() {
        $this->processor = new DataProcessor();
    }

    public function run() {
        runApplication();
    }
}

$app = new Application();
$app->run();
