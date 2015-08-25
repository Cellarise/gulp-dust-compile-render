Feature: Package: Add compile and render dust template functions
  As a developer
  I can compile and render dust templates as a gulp task
  So that I can easily integrate use of dust templates into my build process

  Scenario: Compile and render template

    Given I have a simple dust file
    When I compile and render the dust file using package.json as context
    Then a rendered dust file is output

  Scenario: Compile and render templates with partials

    Given I have a complex dust file with partials
    When I compile and render the dust file using package.json as context
    Then a rendered dust file is output

  @linked=MDGDCR-17
  Scenario: Compile and render templates with dustjs-helpers

    Given I have a complex-using-dustjs-helpers dust file
    When I compile and render the dust file using package.json as context and with dustjs-helpers
    Then a rendered dust file is output