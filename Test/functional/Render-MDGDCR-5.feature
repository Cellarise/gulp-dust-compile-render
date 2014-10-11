Feature: Render: Ignore dust tags with no context property
  As a developer
  I can select to ignore dust tags with no context property
  So that I do not have to escape content in dust templates that are not meant to be rendered

  Scenario: Compile and render template with ignore undefined tags flag set

    Given I have a complex-with-undefined-tags dust file
    When I compile and render the dust file using package.json as context with the ignore undefined tags flag set
    Then a rendered dust file is output ignoring undefined dust tags
