$(document).ready(function() {
    console.log('jQuery is ready!');
    $('#loadNotice').hide();
    $('h3').css('letter-spacing', '-0.3px');
    $('#headline').text('Learning to build interactive websites');
    $('.group-label').css('font-weight', '600');

    function setTheme(isDark) {
        $('body').toggleClass('dark-theme', isDark);
        $('#lightTheme').attr('aria-pressed', String(!isDark));
        $('#darkTheme').attr('aria-pressed', String(isDark));
        $('#themeStatus').text(isDark ? 'Dark theme is active.' : 'Light theme is active.');
    }
    $('#lightTheme').on('click', function() { setTheme(false); });
    $('#darkTheme').on('click', function() { setTheme(true); });
    $('#hideAbout').on('click', function() { $('#aboutDetails').hide(); });
    $('#showAbout').on('click', function() { $('#aboutDetails').show(); });
    $('#toggleAbout').on('click', function() { $('#aboutDetails').toggle(); });
    $('#fadeIn').on('click', function() { $('#galleryImages').stop(true, true).fadeIn(400); });
    $('#fadeOut').on('click', function() { $('#galleryImages').stop(true, true).fadeOut(400); });
    $('#fadeToggle').on('click', function() { $('#galleryImages').stop(true, true).fadeToggle(400); });
    function updatePanelButton(button, expanded) {
        button.attr('aria-expanded', String(expanded));
        button.find('span').text(expanded ? '−' : '+');
    }
    $('.panel-toggle').on('click', function() {
        const button = $(this);
        const expanded = button.attr('aria-expanded') !== 'true';
        $('#' + button.attr('aria-controls')).stop(true, true).slideToggle(300);
        updatePanelButton(button, expanded);
    });
    $('#expandAll').on('click', function() {
        $('.favorite-panel').stop(true, true).slideDown(300);
        $('.panel-toggle').each(function() { updatePanelButton($(this), true); });
    });
    $('#collapseAll').on('click', function() {
        $('.favorite-panel').stop(true, true).slideUp(300);
        $('.panel-toggle').each(function() { updatePanelButton($(this), false); });
    });
    function addSkill(atStart) {
        const skill = $('#skillInput').val().trim();
        if (!skill) {
            $('#skillMessage').text('Please enter a skill. Blank spaces are not a skill.');
            $('#skillInput').attr('aria-invalid', 'true').trigger('focus');
            return;
        }
        const item = $('<li>').text(skill);
        if (atStart) {
            $('#skillList').prepend(item);
        } else {
            $('#skillList').append(item);
        }
        $('#skillMessage').text('Added "' + skill + '" to the ' + (atStart ? 'start.' : 'end.'));
        $('#skillInput').val('').attr('aria-invalid', 'false').trigger('focus');
    }
    $('#addSkill').on('click', function() { addSkill(false); });
    $('#prependSkill').on('click', function() { addSkill(true); });
    $('#removeSkill').on('click', function() {
        const lastSkill = $('#skillList li').last();
        if (!lastSkill.length) {
            $('#skillMessage').text('The skill list is already empty. Add a skill first.');
            return;
        }
        const removedName = lastSkill.text();
        lastSkill.remove();
        $('#skillMessage').text('Removed "' + removedName + '" from the end.');
    });
    $('#changeLink').on('click', function() {
        const link = $('#socialLink');
        const useLinkedIn = link.attr('href') === 'https://github.com/';
        const url = useLinkedIn ? 'https://www.linkedin.com/' : 'https://github.com/';
        link.attr('href', url).text('Visit ' + (useLinkedIn ? 'LinkedIn' : 'GitHub') + ' (opens in a new tab)');
        $('#linkStatus').text('Current destination: ' + url);
    });
    $('#nameInput, #emailInput').on('input', function() {
        $('#namePreview').text($('#nameInput').val() || 'Not entered');
        $('#emailPreview').text($('#emailInput').val() || 'Not entered');
    });
    $('#previewForm').on('submit', function(event) { event.preventDefault(); });
    let skillsExpanded = false;
    $('#animateSkills').on('click', function() {
        skillsExpanded = !skillsExpanded;
        $('.meter-fill').each(function() {
            const bar = $(this);
            const target = skillsExpanded ? Number(bar.attr('data-target')) : 0;
            bar.stop(true, true).animate({ width: target + '%' }, {
                duration: 700,
                progress: function(animation, progress) {
                    const percent = Math.round(bar.width() / bar.parent().width() * 100);
                    bar.attr('aria-valuenow', percent);
                },
                complete: function() { bar.attr('aria-valuenow', target); }
            });
        });
        $(this).attr('aria-pressed', String(skillsExpanded));
        $('#animationStatus').text(skillsExpanded ? 'Targets: HTML 90%, CSS 75%, JavaScript 60%. Click again to reset.' : 'Returning all bars to 0%. Click again to animate.');
    });
});
