
$(document).ready(function () {
    budget_time = {
        'default': {
            0: {
                'text': 'менее 500 тыс',
                'value': 'менее 500 тыс'
            },
            1: {
                'text': '500 тыс - 1.5 млн',
                'value': '500 тыс - 1.5 млн'
            },
            2: {
                'text': '1.5 - 5 млн',
                'value': '1.5 - 5 млн'
            },
            3: {
                'text': '5+ млн',
                'value': '5+ млн'
            },
            'times': {
                0: {
                    'text': 'asap (до 1 мес)',
                    'value': 'asap (до 1 мес)'
                },
                1: {
                    'text': 'комфортно (1-3 мес)',
                    'value': 'комфортно (1-3 мес)'
                },
                2: {
                    'text': 'идеально (более 3 мес)',
                    'value': 'идеально (более 3 мес)'
                },
            },
        },
        'strategy': {
            0: {
                'text': 'менее 700 тыс',
                'value': 'менее 700 тыс'
            },
            1: {
                'text': '700 тыс - 1.5 млн',
                'value': '700 тыс - 1.5 млн'
            },
            2: {
                'text': '1.5 - 5 млн',
                'value': '1.5 - 5 млн'
            },
            'times': {
                0: {
                    'text': 'asap (менее 2 мес)',
                    'value': 'asap (менее 2 мес)'
                },
                1: {
                    'text': 'комфортно (2-4 мес)',
                    'value': 'комфортно (2-4 мес)'
                },
                2: {
                    'text': 'идеально (более 4 мес)',
                    'value': 'идеально (более 4 мес)'
                },
            },
        },
        'creativity': {
            0: {
                'text': 'менее 500 тыс',
                'value': 'менее 500 тыс'
            },
            1: {
                'text': '500 тыс - 1.5 млн',
                'value': '500 тыс - 1.5 млн'
            },
            2: {
                'text': 'более 1.5 млн',
                'value': 'более 1.5 млн'
            },
            'times': {
                0: {
                    'text': 'asap (менее 1 мес)',
                    'value': 'asap (менее 1 мес)'
                },
                1: {
                    'text': 'комфортно (1-2 мес)',
                    'value': 'комфортно (1-2 мес)'
                },
                2: {
                    'text': 'идеально (более 2 мес)',
                    'value': 'идеально (более 2 мес)'
                },
            },
        },
        'smm': {
            0: {
                'text': 'до 500 тыс / мес',
                'value': 'до 500 тыс / мес'
            },
            1: {
                'text': '500 тыс - 1.5 млн / мес',
                'value': '500 тыс - 1.5 млн / мес'
            },
            2: {
                'text': 'более 1.5 млн / мес',
                'value': 'более 1.5 млн / мес'
            },
            'times': {
                0: {
                    'text': 'asap (менее 1 мес)',
                    'value': 'asap (менее 1 мес)'
                },
                1: {
                    'text': 'комфортно (1-2 мес)',
                    'value': 'комфортно (1-2 мес)'
                },
                2: {
                    'text': 'идеально (более 2 мес)',
                    'value': 'идеально (более 2 мес)'
                },
            },
        },
        'brand': {
            0: {
                'text': 'менее 1 млн',
                'value': 'менее 1 млн'
            },
            1: {
                'text': '1 - 3 млн',
                'value': '1 - 3 млн'
            },
            2: {
                'text': 'более 3 млн',
                'value': 'более 3 млн'
            },
            'times': {
                0: {
                    'text': 'asap (менее 2 мес)',
                    'value': 'asap (менее 2 мес)'
                },
                1: {
                    'text': 'комфортно (2-4 мес)',
                    'value': 'комфортно (2-4 мес)'
                },
                2: {
                    'text': 'идеально (более 4 мес)',
                    'value': 'идеально (более 4 мес)'
                },
            },
        },
        'promo': {
            0: {
                'text': 'менее 5 млн',
                'value': 'менее 5 млн'
            },
            1: {
                'text': '5 - 10 млн',
                'value': '5 - 10 млн'
            },
            2: {
                'text': 'более 10 млн',
                'value': 'более 10 млн'
            },
            'times': {
                0: {
                    'text': 'asap (менее 1 мес)',
                    'value': 'asap (менее 1 мес)'
                },
                1: {
                    'text': 'комфортно (1-2 мес)',
                    'value': 'комфортно (1-2 мес)'
                },
                2: {
                    'text': 'идеально (более 2 мес)',
                    'value': 'идеально (более 2 мес)'
                },
            },
        },
        'production': {
            0: {
                'text': 'менее 5 млн',
                'value': 'менее 5 млн'
            },
            1: {
                'text': '5 - 10 млн',
                'value': '5 - 10 млн'
            },
            2: {
                'text': 'более 10 млн',
                'value': 'более 10 млн'
            },
            'times': {
                0: {
                    'text': 'asap (менее 1 мес)',
                    'value': 'asap (менее 1 мес)'
                },
                1: {
                    'text': 'комфортно (1-3 мес)',
                    'value': 'комфортно (1-3 мес)'
                },
                2: {
                    'text': 'идеально (более 3 мес)',
                    'value': 'идеально (более 3 мес)'
                },
            },
        },
        'design': {
            0: {
                'text': 'менее 500 тыс',
                'value': 'менее 500 тыс'
            },
            1: {
                'text': '500 тыс - 1.5 млн',
                'value': '500 тыс - 1.5 млн'
            },
            2: {
                'text': 'более 1.5 млнн',
                'value': 'более 1.5 млн'
            },
            'times': {
                0: {
                    'text': 'asap (менее 1 мес)',
                    'value': 'asap (менее 1 мес)'
                },
                1: {
                    'text': 'комфортно (1-2 мес)',
                    'value': 'комфортно (1-2 мес)'
                },
                2: {
                    'text': 'идеально (более 2 мес)',
                    'value': 'идеально (более 2 мес)'
                },
            },
        },
    }
    requiredRules = {
        'send_brief': ['i_want', 'budget', 'time-2', 'name-3', 'how_to_contact_-3', 'contact-3'],
        'vacancy': ['vacancy_is', 'portfolio-2', 'name-2', 'how_to_contact-2', 'contact-2'],
    }
   // $("#name-3").prop('required', true);
    $('.brief_input .enter_icon').addClass('active');
    window.$_GET = new URLSearchParams(location.search);

  //  appendScript('https://cdn.jsdelivr.net/npm/@finsweet/attributes-formsubmit@1/formsubmit.js');
  //  appendScript('https://cdn.jsdelivr.net/npm/@finsweet/attributes-cmsselect@1/cmsselect.js');
    var observer = new MutationObserver(function (mutations) {
        if ($('.success-message.w-form-done').is(":visible")) $('.form_line.heading').hide()
    });
    var target = document.querySelector('.w-form-done');
    observer.observe(target, {
        attributes: true
    });
    function inlineFix() {
        $('.form_select-wrapper').each(function () {
            if ($(this).find('.text-form.text-underlined').html().length == 0) {
                $(this).addClass('inline-flex');
            } else {
                $(this).removeClass('inline-flex');
            }
        });
    }
    inlineFix();
    // глобальная переменная типа формы (бриф или вакансия)
    window.formtype = '';
    // Глобальная timeline
    const tl = gsap.timeline({});
    // прячу строки  
    $('.form_line:not(:first)').each(function () {
        $(this).addClass('hidden');
    })
    // прячу все селекты 
    $('.form_select-wrapper').each(function () {
        $(this).addClass('hidden');
    })
    // toggle псевдоселекта
    $(document).on('click', '.form_select-head', function () {
        $(this).closest('.form_select-dd').toggleClass('active');
    });
    formWidth = $('.section-form form').width();
    formOffset = $('.section-form form')[0].offsetLeft;
    // Изменение размера type="text" при печати
    $('.form_input').on('input', function () {
        if ($(this).attr('id') == 'contact-3' && $('#how_to_contact_-3').val() == 'Телефону') {
            const masked = IMask.createMask({
                mask: '+7(000)000-00-00'
            });
            masked.resolve($(this).val());
            $('#inputLength').html(masked.value);
        } else {
            $('#inputLength').html($(this).val());
        }
        if ($(this).val().length > 0) {
            $(this).css('flex', $('#inputLength').width() + 'px' + ' 0 0');
            $(this).css('width', $('#inputLength').width() + 'px');
            maxwidth = formWidth - $(this).closest('.input_wrapper')[0].offsetLeft + formOffset - 70;
            $(this).css('max-width', maxwidth + 'px');
            $(this).next('.enter_icon').addClass('active');
        } else {
            $(this).next('.enter_icon').removeClass('active')
        }
    });
    // валидация почты
    const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
    function isEmailValid(value) {
        return EMAIL_REGEXP.test(value);
    }

    $(document).on('input', '#contact-2', function (e) {
        if ($('#how_to_contact-2').val() == 'email') {
            if (isEmailValid($(this).val())) {
                $(this).closest('.input_wrapper').addClass('active');
            } else {
                $(this).closest('.input_wrapper').removeClass('active');
            }
        } else {
            $(this).closest('.input_wrapper').addClass('active');
        }
    });

    $(document).on('input', '#contact-3', function (e) {
        if ($('#how_to_contact_-3').val() == 'email') {
            if (isEmailValid($(this).val())) {
                $(this).closest('.input_wrapper').addClass('active');
            } else {
                $(this).closest('.input_wrapper').removeClass('active');
            }
        } else {
            $(this).closest('.input_wrapper').addClass('active');
        }
    });
    // заполнение type="text"
    $(document).on('keydown', '.form_input', function (e) {
        if (e.key === 'Enter') {
            e.preventDefault();
            const $input = $(this);
            if ($input.val().trim().length == 0) return false;
    
            // Проверка email если надо
            if (($input.attr('id') == 'contact-2' && $('#how_to_contact-2').val() == 'email') ||
                ($input.attr('id') == 'contact-3' && $('#how_to_contact_-3').val() == 'email')) {
                if (!isEmailValid($input.val())) return false;
            }
    
            $input.blur(); // убираем фокус
            updateProgress($input, 'text'); // двигаем форму дальше
        }
    });

    $(document).on('click', '.input_wrapper .enter_icon, .input_wrapper .skip_text_mobile', function () {
        $(this).siblings('input').trigger(
            $.Event('keydown', { key: 'Enter' })
        );
    })
    window.mask = false;
    $(document).on('change', '#how_to_contact_-3', function () {
        $('#contact-3').css('width', '45px');
        $('#contact-3').css('flex', 'auto');
        if ($(this).val() == 'Telegram') {
            $('#contact-3').val('@');
            if (window.mask !== false) window.mask.destroy();
            window.mask = false;
        } else if ($(this).val() == 'Телефону') {
            const element = document.getElementById('contact-3');
            const maskOptions = {
                mask: '+7(000)000-00-00',
            };
            if (window.mask === false) {
                window.mask = IMask(element, maskOptions);
                window.mask.value = '+7';
            }

        } else {
            if (window.mask !== false) window.mask.destroy();
            window.mask = false;
            $('#contact-3').val('');
        }
    });
    // выбор селекта
    $(document).on('click', '.form-option', function () {
        container = $(this).closest('.form_select-wrapper');
        container.find('option').each(function () {
            $(this).removeAttr("selected")
        })
        select = container.find('select');
        container.find('option:contains(' + $(this).text() + ')').attr('selected', 'selected');
        if (select.attr('id') == 'time-2' || select.attr('id') == 'vacancy_is') {
            container.find('.text-form').html($(this).text());
        } else {
            container.find('.text-form').html($(this).text());
        }
        container.find('.form_select-dd').removeClass('active').addClass('hidden');
        container.addClass('animated');
        inlineFix();
        updateProgress(container, 'select');
    });
    // выбор чекбокса
    $(document).on('change', 'input[type=checkbox]', function () {
        container = $(this).closest('.form_select-wrapper');
        checkboxValues = [];
        checkboxKeys = [];
        container.find('.form-check').each(function () {
            checkbox = $(this).find('input[type="checkbox"]');
            if (checkbox.is(':checked')) checkboxValues.push(checkbox.next('.subhead-2').text());
            if (checkbox.is(':checked')) checkboxKeys.push(checkbox.attr('id'));
        });
        if (checkboxValues.length === 0) {
            container.find('.form-next').removeClass('active');
        } else {
            container.find('.form-next').addClass('active');
        };
    });
    // другая вакансия
    $(document).on('click', '.form-other', function () {
        container = $(this).closest('.form_select-wrapper');
        $('#vacancy_is').append($('<option>', {
            value: 'Другая',
            text: 'Другая'
        }));
        $('#vacancy_is').val('Другая');
        container.find('option').each(function () {
            $(this).removeAttr("selected")
        })
        container.find('.text-form').html($(this).text());
        container.find('.form_select-dd').removeClass('active').addClass('hidden');
        container.addClass('animated');
        inlineFix();
        updateProgress(container, 'select')
    });
    // выбор чекбоксов через клик "Далее"
    $(document).on('click', '.form-next', function () {
        container = $(this).closest('.form_select-wrapper');
        checkboxes = container.find('.form_check-flex');
        checkboxValues = [];
        checkboxKeys = [];
        checkboxes.find('.form-check').each(function () {
            checkbox = $(this).find('input[type="checkbox"]');
            if (checkbox.is(':checked')) checkboxValues.push(checkbox.next('.subhead-2').text());
            if (checkbox.is(':checked')) checkboxKeys.push(checkbox.attr('id'));
        });
        if (checkboxValues.length === 0) return;
        container.find('.form_select-dd').removeClass('active').addClass('hidden');
        container.find('.text-form').html(checkboxValues.join(', '));
        inlineFix();
        populate_budgets(checkboxKeys)
        updateProgress(container, 'checkbox')
    });
    // Очистка выбора через клик по подчеркнутому тексту
    $(document).on('click', '.text-form.text-underlined', function () {
        $(this).html('');
        container = $(this).closest('.form_select-wrapper');
        container.find('.form_select-dd').removeClass('hidden').addClass('active');
        inlineFix();
        clear_after(container)
    });

    // Главная функция отслеживания прогресса
    function updateProgress(container, type) {
        if (container) clear_after(container);
        if (type == 'select') {
            select = container.find("select");
            value = select.val();
            id = select.attr('id');
            if (id == 'i_want' && value == 'vacancy') {
                $('#strategy').closest('.form_select-wrapper').addClass('disabled');
                $('#vacancy_is').closest('.form_select-wrapper').removeClass('disabled');
                $('#vacancy_is').closest('.form_select-wrapper').addClass('marginL');
                setRequired('vacancy');
                if (window.screen.width > 768) window.scrollTo(0, 10000);
            }
            if (id == 'i_want' && value == 'send_brief') {
                $('#strategy').closest('.form_select-wrapper').removeClass('disabled');
                $('#vacancy_is').closest('.form_select-wrapper').addClass('disabled');
                setRequired('send_brief');
                next_text = container.siblings('.text-form.hidden');
                container.siblings('.text-form.hidden').addClass('animated');
                container.siblings('.text-form.hidden').addClass('marginL');
                container.siblings('.text-form.hidden').removeClass('hidden');
                typeText(next_text[0], container.siblings('.form_select-wrapper.hidden:not(.disabled)'));
                return;
            }
            if (id == 'vacancy_is') {
                $('form .form_line:first-child').addClass('animated');
                $('#3A').removeClass('hidden');
                $("#3A .text-form:first").removeClass('hidden');
                $("#3A .text-form:first").addClass('animated');
                container = $("#3A .text-form:first");
                typeText($("#3A .text-form:first")[0], container.next('.input_wrapper'));
            }
            if (id == 'budget') {
                container.next('.text-form').removeClass('hidden');
                container.next('.text-form').addClass('animated');
                typeText(container.next('.text-form')[0], container.siblings('.form_select-wrapper.hidden'));
                return;
            }
            if (id == 'time-2') {
                $('#3B').addClass('animated');
                $('#4B').removeClass('hidden');
                $("#4B .text-form:first").removeClass('hidden');
                $("#4B .text-form:first").addClass('animated');
                container = $("#4B .text-form:first");
                typeText($("#4B .text-form:first")[0], container.next('.input_wrapper'));
            }
            if (id == 'how_to_contact-2') {
                container.closest('.form_select-wrapper').next('.input_wrapper').removeClass('hidden');
                container.closest('.form_select-wrapper').next('.input_wrapper').addClass('animated');
                container.closest('.form_select-wrapper').next('.input_wrapper').find('input').focus();
                if (window.screen.width > 768) window.scrollTo(0, 10000);
                return;
            }
            if (id == 'how_to_contact_-3') {
                $('#how_to_contact_-3').trigger('change');
                container.closest('.form_select-wrapper').next('.input_wrapper').removeClass('hidden');
                container.closest('.form_select-wrapper').next('.input_wrapper').addClass('animated');
                container.closest('.form_select-wrapper').next('.input_wrapper').find('input').focus();
                window.scrollTo(0, 10000);
                return;
            }
        }
        if (type == 'text') {
            id = container.attr('id');
            if (id == 'vacancy_is') {
                $('form .form_line:first-child').addClass('animated');
                $('#3A').removeClass('hidden');
                $("#3A .text-form:first").removeClass('hidden');
                $("#3A .text-form:first").addClass('animated');
                container = $("#3A .text-form:first");
                typeText($("#3A .text-form:first")[0], container.next('.input_wrapper'));
            }
            if (id == 'name-2') {
                container.closest('.input_wrapper').next('.text-form').removeClass('hidden');
                container.closest('.input_wrapper').next('.text-form').addClass('animated');
                typeText(container.closest('.input_wrapper').next('.text-form')[0], container.closest('.input_wrapper').siblings('.input_wrapper.hidden'));
                return;
            }
            if (id == 'portfolio-2') {
                $('#3A').addClass('animated');
                $('#4A').removeClass('hidden');
                $("#4A .text-form:first").removeClass('hidden');
                $("#4A .text-form:first").addClass('animated');
                container = $("#4A .text-form:first");
                typeText($("#4A .text-form:first")[0], container.next('.input_wrapper'));
                if (window.screen.width > 768) window.scrollTo(0, 10000);
                return;
            }

            if (id == 'contact-2') {
                $('#4A').addClass('animated');
                $('.form_subit-wrapper').removeClass('hidden');
                if (window.screen.width > 768) window.scrollTo(0, 10000);
                return;
            }
            if (id == 'name-3') {
                container.closest('.input_wrapper').next('.text-form').removeClass('hidden');
                container.closest('.input_wrapper').next('.text-form').addClass('animated');
                typeText(container.closest('.input_wrapper').next('.text-form')[0], container.closest('.input_wrapper').siblings('.input_wrapper.hidden'));
                return;
            }
            if (id == 'company_name') {
                $('#4B').addClass('animated');
                $('#5B').removeClass('hidden');
                $("#5B .text-form:first").removeClass('hidden');
                $("#5B .text-form:first").addClass('animated');
                container = $("#5B .text-form:first");
                typeText(container[0], container.next('.form_select-wrapper'));
                window.scrollTo(0, 10000);
                return;
            }
            if (id == 'contact-3') {
                $('#5B').addClass('animated');
                $('#6B').removeClass('hidden');
                $("#6B .text-form:first").removeClass('hidden');
                $("#6B .text-form:first").addClass('animated');
                container = $("#6B .text-form:first");
                typeText(container[0], container.next('.input_wrapper'));
                return;
            }
            if (id == 'brief') {
                $('#6B').addClass('animated');
                $('.form_subit-wrapper').removeClass('hidden');
                window.scrollTo(0, 10000);
                return;
            }
            if (id == 'project_description') {
                $('#2_2B').addClass('animated');
                $('#3B').removeClass('hidden');
                $("#3B .text-form:first").removeClass('hidden');
                $("#3B .text-form:first").addClass('animated');
                container = $("#3B .text-form:first");
                typeText(container[0], container.next('.form_select-wrapper'));
                if (window.screen.width > 768) window.scrollTo(0, 10000);
                return;
            }
        }
        if (type == 'checkbox') {
            $('form .form_line:first-child').addClass('animated');
            $('#2_2B').removeClass('hidden');
            $("#2_2B .text-form:first").removeClass('hidden');
            $("#2_2B .text-form:first").addClass('animated');
            container = $("#2_2B .text-form:first");
            // $('#project_description').css('max-width', 'calc(100% - ' + $('#2_2B .text-form').width() + 'px - 15px');
            typeText(container[0], container.next('.input_wrapper'));
            window.scrollTo(0, 10000);
            return;
        }
        nextLine = $('.form_line:not(.animated):first');
        nextBlock = container ? container.siblings(':not(.disabled):not(.animated)').first() : $('.form_line > div:not(.disabled):not(.animated):first');
        nextBlock.addClass('animated');
        nextBlock.removeClass('hidden');
        nextBlock.focus();
    }

    // очищаем все строки и элементы после нашего селектора. Сбрасываем заполнение до текущего элемента.
    function clear_after(container) {

        $('.form_subit-wrapper').addClass('hidden');
        $('.form_submit').removeClass('agitate');
        container_line = container.closest('.form_line');
        container_line.removeClass('animated');
        container_line.nextAll('.form_line').each(function () {
            $(this).removeClass('animated').addClass('hidden');
        });
        container.nextAll().each(function () {
            $(this).removeClass('animated').addClass('hidden');
            if ($(this).is('.input_wrapper')) {
                $(this).find('input').val('');
                $(this).find('input').css('flex', 'auto');
                $(this).find('#contact-2').css('flex', 'auto');
                $(this).find('#contact-3').css('flex', 'auto');

            }
            if ($(this).is('.form_select-wrapper')) {
                $(this).find('.text-form.text-underlined').html('');
                $(this).find('.form_select-dd').removeClass('hidden');
                $(this).find('input[type="checkbox"]').each(function () {
                    $(this).prop('checked', false);
                })
                $(this).find('.w-checkbox-input').each(function () {
                    $(this).removeClass('w--redirected-checked');
                })
            }
        });
        container_line.nextAll('.form_line').find('> *').each(function () {
            $(this).removeClass('animated').addClass('hidden');
            if ($(this).is('.input_wrapper')) {
                $(this).find('input').val('');
                $(this).find('input').css('flex', 'auto');
                $(this).find('input').css('width', '45px')
            }
            if ($(this).is('.form_select-wrapper')) {
                $(this).find('.text-form.text-underlined').html('');
                $(this).find('.form_select-dd').removeClass('hidden');
            }
        });
        container.nextAll().removeClass('animated').addClass('hidden');
    }
    // Заполняем актуальные бюджеты
    function populate_budgets(checkboxValues) {
        budget_input = $('#budget');
        time_input = $('#time-2');
        if (checkboxValues.length > 1) {
            htmloptions = $('#budget').closest('.form_select-wrapper').find('.form_select-body .form_option-wrapper')
            if ($('#budget option')[3]) {
                $('#budget option')[3].remove()
            }
            if (htmloptions[3]) {
                htmloptions[3].remove()
            }
            subheads = $('#budget').closest('.form_select-wrapper').find('.form_select-body .subhead-2')
            budget_input.find('option').each(function (index) {
                $(this).attr('value', budget_time.default[index].value);
                $(this).html(budget_time.default[index].text)
            });
            subheads.each(function (index) {
                $(this).html(budget_time.default[index].text)
            });
            budget_input.append('<option value="' + budget_time.default["3"].value + '">' + budget_time.default["3"].text + '</option>');
            $('#budget').closest('.form_select-wrapper').find('.form_option-wrapper:last').clone().appendTo($('#budget').closest('.form_select-wrapper').find('.form_select-grid')).find('.subhead-2').html(budget_time.default["3"].text)


            subheads = $('#time-2').closest('.form_select-wrapper').find('.form_select-body .subhead-2')
            time_input.find('option').each(function (index) {
                $(this).attr('value', budget_time.default.times[index].value);
                $(this).html(budget_time.default.times[index].text)
            });
            subheads.each(function (index) {
                $(this).html(budget_time.default.times[index].text)
            });
        }
        if (checkboxValues.length == 1) {
            service = checkboxValues[0];
            htmloptions = $('#budget').closest('.form_select-wrapper').find('.form_select-body .form_option-wrapper')
            if ($('#budget option')[3]) {
                $('#budget option')[3].remove()
            }
            if (htmloptions[3]) {
                htmloptions[3].remove()
            }
            budget_input.find('option').each(function (index) {
                $(this).attr('value', budget_time[service][index].value);
                $(this).html(budget_time[service][index].text)
            });
            subheads = $('#budget').closest('.form_select-wrapper').find('.form_select-body .subhead-2')
            subheads.each(function (index) {
                $(this).html(budget_time[service][index].text)
            });

            subheads = $('#time-2').closest('.form_select-wrapper').find('.form_select-body .subhead-2')
            time_input.find('option').each(function (index) {
                $(this).attr('value', budget_time[service].times[index].value);
                $(this).html(budget_time[service].times[index].text)
            });
            subheads.each(function (index) {
                $(this).html(budget_time[service].times[index].text)
            });
        }
    }
    // простановка required
    function setRequired(type) {
        if (type == 'vacancy') {
            requiredRules.vacancy.forEach((field) => {
                $('#' + field).prop('required', true);
            });
            requiredRules.send_brief.forEach((field) => {
                $('#' + field).prop('required', false);
            });
        }
        if (type == 'send_brief') {
            requiredRules.vacancy.forEach((field) => {
                $('#' + field).prop('required', false);
            });
            requiredRules.send_brief.forEach((field) => {
                $('#' + field).prop('required', true);
            });
        }
    }
    // анимация текста
    function typeText(elem, focus) {
        tl.from(elem, {
            onComplete: function () {
                if (focus) {
                    focus.removeClass('hidden');
                    focus.addClass('animated');
    
                    if (focus.hasClass('input_wrapper')) {
                        focus.addClass('active');
                        focus.find('input').focus().select(); // Фокус прямо в input
                    } else {
                        focus.focus(); // если вдруг другой тип
                    }
                }
            },
            text: {
                value: "",
                delimiter: ""
            },
            duration: 0.5, // чуть быстрее для живости
            ease: "none"
        });
        setTimeout(function() {
            if (focus && focus.find('input').length > 0) {
                focus.find('input').focus().select();
            }
        }, 600); // чтобы точно после анимации
    }

    $(document).find('.section-form').show();
    $('.form > .form_line:first').removeClass('hidden');
    // Начальная анимация
    tl.from($('.form > .form_line:first .text-form')[0], {
        onComplete: function () {
            $('.form > .form_line:first .text-form').addClass('animated');
            $('#email-form > .form_line:first').removeClass('hidden');
        },
        text: {
            value: "",
            delimiter: ""
        },
        duration: 2,
        ease: "none"
    }).from($('#email-form > .form_line:first .text-form')[0], {
        onComplete: function () {
            $('#email-form > .form_line:first .text-form:first').addClass('animated');
            if ($_GET.get('vacancy_is')) {
                $('#i_want').val('vacancy');
                container = $('#i_want').closest('.form_select-wrapper');
                container.find('.text-form').html('откликнуться на вакансию');
                container.find('.form_select-dd').removeClass('active').addClass('hidden');
                container.removeClass('hidden');
                container.addClass('animated');
                inlineFix();
                $('#vacancy_is').val($_GET.get('vacancy_is'))
                container = $('#vacancy_is').closest('.form_select-wrapper');
                container.find('.text-form').html($_GET.get('vacancy_is'));
                container.find('.form_select-dd').removeClass('active').addClass('hidden');
                container.removeClass('hidden');
                container.addClass('animated');
                container.addClass('marginL');
                inlineFix();
                updateProgress(container, 'select');
            } else {
                updateProgress();
            }
        },
        text: {
            value: "",
            delimiter: ""
        },
        duration: 1,
        ease: "none"
    }
    );
})
