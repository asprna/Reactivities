using FluentValidation;

namespace Application.Validators
{
    public static class ValidatorExtensions
    {
        public static IRuleBuilder<T, string> Password<T>(this IRuleBuilder<T, string> ruleBuilder)
        {
            var options = ruleBuilder
                .NotEmpty()
                .MaximumLength(6).WithMessage("lenth > 6")
                .Matches("[A-Z]").WithMessage("Uppercase")
                .Matches("[a-z]").WithMessage("lowercase")
                .Matches("[0-9]").WithMessage("number")
                .Matches("[^a-zA-Z0-9]").WithMessage("alphanumeric");

            return options;
        }
    }
}