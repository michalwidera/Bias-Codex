<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg"  version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xml:lang="en-us"
  width="1900" height="1500"
  viewBox="0 0 1900 1500">
<title>The Cognitive Bias Codex</title>

<style type="text/css">
  text { font-family: "DejaVu Sans", sans-serif; }
  text a:hover { fill:   blue; text-decoration: underline; }
  text, circle { stroke: none; }
  path         { fill:   none; }
  a ~ circle, a ~ text { transition: fill 0.5s; }
  
  a { cursor: pointer; }
  a:visited { all: unset; } /* workaround for weirdness in Chrome */
  a:hover path  , a:hover ~ path { stroke: black; stroke-width: 2px; }
  a:hover circle, a:hover ~ circle,
   a:hover text  , a:hover ~ text { fill: black; }
  a:hover text { text-decoration: underline; }
</style>

<rect id="background" width="100%" height="100%" fill="#fff"/>

<g id="biases" transform="translate(950,785)">
<script type="text/javascript"><![CDATA[

var link_prefix = "https://en.wikipedia.org/wiki/";

var tree_text = {name: "T H E C O G N I T I V E B I A S C O D E X", children:[
  {name: "Focusing on relevant \ninformation instincts", children:[
    {name: "Focus on common events", children:[
      {name: "Availability heuristic"     ,article: "Availability_heuristic"},
      {name: "Attentional bias"           ,article: "Attentional_bias"},
      {name: "Illusory truth effect"      ,article: "Illusory_truth_effect"},
      {name: "Mere–exposure effect"       ,article: "Mere-exposure_effect"},
      {name: "Context effect"             ,article: "Context_effect"},
      {name: "Cue–dependent forgetting"   ,article: "Cue-dependent_forgetting"},
      {name: "Mood–congruent memory bias" ,article: "Mood_congruence"},
      {name: "Frequency illusion"         ,article: "List_of_cognitive_biases#Frequency_illusion"},
      {name: "Baader–Meinhof Phenomenon"  ,article: "List_of_cognitive_biases#Frequency_illusion"},
      {name: "Empathy gap"                ,article: "Empathy_gap"},
      {name: "Omission bias"              ,article: "Omission_bias"},
      {name: "Base rate fallacy"          ,article: "Base_rate_fallacy"},
    ]},
    {name: "Focus on the new and unsafe", children:[
      {name: "Bizarreness effect"         ,article: "Bizarreness_effect"},
      {name: "Humor effect"               ,article: "List_of_cognitive_biases#Humor_effect"},
      {name: "Von Restorff effect"        ,article: "Von_Restorff_effect"},
      {name: "Picture superiority effect" ,article: "Picture_superiority_effect"},
      {name: "Self–relevance effect"      ,article: "Self-reference_effect"},
      {name: "Negativity bias"            ,article: "Negativity_bias"},
    ]},
    {name: "Focus on human errors", children:[
      {name: "Anchoring"         ,article: "Anchoring"},
      {name: "Conservatism"      ,article: "Conservatism_(belief_revision)"},
      {name: "Contrast effect"   ,article: "Contrast_effect"},
      {name: "Distinction bias"  ,article: "Distinction_bias"},
      {name: "Focusing effect"   ,article: "Anchoring#Focusing_effect"},
      {name: "Framing effect"    ,article: "Framing_effect_(psychology)"},
      {name: "Money illusion"    ,article: "Money_illusion"},
      {name: "Weber–Fechner law" ,article: "Weber–Fechner_law"},
    ]},
    {name: "Sustaining understanding", children:[
      {name: "Confirmation bias"             ,article: "Confirmation_bias"},
      {name: "Congruence bias"               ,article: "Congruence_bias"},
      {name: "Post–purchase rationalization" ,article: "Choice-supportive_bias"},
      {name: "Choice–supportive bias"        ,article: "Choice-supportive_bias"},
      {name: "Selective perception"          ,article: "Selective_perception"},
      {name: "Observer–expectancy effect"    ,article: "Observer-expectancy_effect"},
      {name: "Experimenter's bias"           ,article: "Observer-expectancy_effect"}, // NOTE(TilmannR): Should duplicates like these be removed or grouped together or left unchanged?
      {name: "Observer effect"               ,article: "Observer-expectancy_effect"},
      {name: "Expectation bias"              ,article: "Observer-expectancy_effect"},
      {name: "Ostrich effect"                ,article: "Ostrich_effect"},
      {name: "Subjective validation"         ,article: "Subjective_validation"},
      {name: "Continued influence effect"    ,article: "Confirmation_bias#continued_influence_effect"},
      {name: "Semmelweis reflex"             ,article: "Semmelweis_reflex"},
    ]},
    {name: "Focus on human errors", children:[
      {name: "Bias blind spot" ,article: "Bias_blind_spot"},
      {name: "Naïve cynicism"  ,article: "Naïve_cynicism"},
      {name: "Naïve realism"   ,article: "Naïve_realism_(psychology)"},
    ]},
  ]},
  {name: "Estimation instincts", children:[
    {name: "Conclusion estimations", children:[
      {name: "Confabulation"                ,article: "Confabulation"},
      {name: "Clustering illusion"          ,article: "Clustering_illusion"},
      {name: "Insensitivity to sample size" ,article: "Insensitivity_to_sample_size"},
      {name: "Neglect of probability"       ,article: "Neglect_of_probability"},
      {name: "Anecdotal fallacy"            ,article: "Anecdotal_evidence"},
      {name: "Illusion of validity"         ,article: "Illusion_of_validity"},
      {name: "Masked–man fallacy"           ,article: "Masked-man_fallacy"},
      {name: "Recency illusion"             ,article: "Recency_illusion"},
      {name: "Gambler's fallacy"            ,article: "Gambler's_fallacy"},
      {name: "Hot–hand fallacy"             ,article: "Hot-hand_fallacy"},
      {name: "Illusory correlation"         ,article: "Illusory_correlation"},
      {name: "Pareidolia"                   ,article: "Pareidolia"},
      {name: "Anthropomorphism"             ,article: "Anthropomorphism#Psychology"},
    ]},
    {name: "Estimation based on knowledge", children:[
      {name: "Group attribution error"    ,article: "Group_attribution_error"},
      {name: "Ultimate attribution error" ,article: "Ultimate_attribution_error"},
      {name: "Stereotyping"               ,article: "Stereotype"},
      {name: "Essentialism"               ,article: "Essentialism"},
      {name: "Functional fixedness"       ,article: "Functional_fixedness"},
      {name: "Moral credential effect"    ,article: "Self-licensing"},
      {name: "Just–world hypothesis"      ,article: "Just-world_hypothesis"},
      {name: "Argument from fallacy"      ,article: "Argument_from_fallacy"},
      {name: "Authority bias"             ,article: "Authority_bias"},
      {name: "Automation bias"            ,article: "Automation_bias"},
      {name: "Bandwagon effect"           ,article: "Bandwagon_effect"},
      {name: "Placebo effect"             ,article: "Placebo"},
    ]},
    {name: "Security in the known", children:[
      {name: "Out–group homogeneity bias" ,article: "Out-group_homogeneity"},
      {name: "Cross–race effect"          ,article: "Cross-race_effect"},
      {name: "In–group favoritism"        ,article: "In-group_favoritism"}, // NOTE(TilmannR): changed name from "bias" to "favoritism"
      {name: "Halo effect"                ,article: "Halo_effect"},
      {name: "Cheerleader effect"         ,article: "Cheerleader_effect"},
      {name: "Positivity effect"          ,article: "Positivity_effect"},
      {name: "Not invented here"          ,article: "Not_invented_here"},
      {name: "Reactive devaluation"       ,article: "Reactive_devaluation"},
      {name: "Well–traveled road effect"  ,article: "Well_travelled_road_effect"},
    ]},
    {name: "Fast number estimations", children:[
      {name: "Mental accounting"             ,article: "Mental_accounting"},
      {name: "Appeal to probability fallacy" ,article: "Appeal_to_probability"},
      {name: "Normalcy bias"                 ,article: "Normalcy_bias"},
      {name: "Murphy's Law"                  ,article: "Murphy's_law"},
      {name: "Zero sum bias"                 ,article: "Zero-sum_thinking"},
      {name: "Survivorship bias"             ,article: "Survivorship_bias"},
      {name: "Subadditivity effect"          ,article: "Subadditivity_effect"},
      {name: "Denomination effect"           ,article: "Denomination_effect"},
      {name: "The magical number 7 ± 2"      ,article: "The_Magical_Number_Seven,_Plus_or_Minus_Two"},
    ]},
    {name: "Wants estimations", children:[
      {name: "Illusion of transparency"       ,article: "Illusion_of_transparency"},
      {name: "Curse of knowledge"             ,article: "Curse_of_knowledge"},
      {name: "Spotlight effect"               ,article: "Spotlight_effect"},
      {name: "Extrinsic incentive error"      ,article: "Extrinsic_incentives_bias"},
      {name: "Illusion of external agency"    ,article: "Illusion_of_external_agency"},
      {name: "Illusion of asymmetric insight" ,article: "Illusion_of_asymmetric_insight"},
    ]},
    {name: "Self is sustained", children:[
      {name: "Telescoping effect"    ,article: "Telescoping_effect"},
      {name: "Rosy retrospection"    ,article: "Rosy_retrospection"},
      {name: "Hindsight bias"        ,article: "Hindsight_bias"},
      {name: "Outcome bias"          ,article: "Outcome_bias"},
      {name: "Moral luck"            ,article: "Moral_luck"},
      {name: "Declinism"             ,article: "Declinism"},
      {name: "Impact bias"           ,article: "Impact_bias"},
      {name: "Pessimism bias"        ,article: "Optimism_bias#Pessimism_bias"},
      {name: "Planning fallacy"      ,article: "Planning_fallacy"},
      {name: "Time–saving bias"      ,article: "Time-saving_bias"},
      {name: "Pro–innovation bias"   ,article: "Pro-innovation_bias"},
      {name: "Projection bias"       ,article: "Affective_forecasting#Projection_bias"},
      {name: "Restraint bias"        ,article: "Restraint_bias"},
      {name: "Self–consistency bias" ,article: "List_of_cognitive_biases#Consistency_bias"},
    ]},
  ]},
  {name: "Proactivity instincts", children:[
    {name: "Self deception insticts to cause proactivity", children:[
      {name: "Overconfidence effect"            ,article: "Overconfidence_effect"},
      {name: "Social desirability bias"         ,article: "Social_desirability_bias"},
      {name: "Third–person effect"              ,article: "Third-person_effect"},
      {name: "False consensus effect"           ,article: "False_consensus_effect"},
      {name: "Hard–easy effect"                 ,article: "Hard–easy_effect"},
      {name: "Lake Wobegone effect"             ,article: "Lake_Wobegon#The_Lake_Wobegon_effect"},
      {name: "Dunning–Kruger effect"            ,article: "Dunning–Kruger_effect"},
      {name: "Egocentric bias"                  ,article: "Egocentric_bias"},
      {name: "Optimism bias"                    ,article: "Optimism_bias"},
      {name: "Forer effect"                     ,article: "Barnum_effect"},
      {name: "Barnum effect"                    ,article: "Barnum_effect"},
      {name: "Self–serving bias"                ,article: "Self-serving_bias"},
      {name: "Actor–observer bias"              ,article: "Actor–observer_asymmetry#bias"},
      {name: "Illusion of control"              ,article: "Illusion_of_control"},
      {name: "Illusory superiority"             ,article: "Illusory_superiority"},
      {name: "Fundamental attribution error"    ,article: "Fundamental_attribution_error"},
      {name: "Defensive attribution hypothesis" ,article: "Defensive_attribution_hypothesis"},
      {name: "Trait ascription bias"            ,article: "Trait_ascription_bias"},
      {name: "Effort justification"             ,article: "Effort_justification"},
      {name: "Risk compensation"                ,article: "Risk_compensation"},
      {name: "Peltzman effect"                  ,article: "Risk_compensation#Peltzman_effect"},
    ]},
    {name: "Focusing on current tasks", children:[
      {name: "Hyperbolic discounting"     ,article: "Hyperbolic_discounting"},
      {name: "Appeal to novelty"          ,article: "Appeal_to_novelty"},
      {name: "Identifiable victim effect" ,article: "Identifiable_victim_effect"},
    ]},
    {name: "Focusing on tasks", children:[
      {name: "Sunk cost fallacy"            ,article: "Sunk_cost#Loss_aversion_and_the_sunk_cost_fallacy"}, // NOTE(TilmannR): "Sunk Cost Fallacy" redirects to "Escalation_of_commitment", but "Sunk cost fallacy" redirects to "Sunk_cost#Loss_aversion_and_the_sunk_cost_fallacy".
      {name: "Irrational escalation"        ,article: "Escalation_of_commitment"},
      {name: "Escalation of commitment"     ,article: "Escalation_of_commitment"},
      {name: "Generation effect"            ,article: "Generation_effect"},
      {name: "Loss aversion"                ,article: "Loss_aversion"},
      {name: "IKEA effect"                  ,article: "IKEA_effect"},
      {name: "Unit bias"                    ,article: "List_of_cognitive_biases"}, // NOTE(TilmannR): Linking to "List_of_cognitive_biases#Unit_bias" doesn't work.
      {name: "Zero–risk bias"               ,article: "Zero-risk_bias"},
      {name: "Disposition effect"           ,article: "Disposition_effect"},
      {name: "Pseudocertainty effect"       ,article: "Pseudocertainty_effect"},
      {name: "Processing difficulty effect" ,article: "List_of_cognitive_biases#Processing_difficulty_effect"}, // NOTE(TilmannR): Same as "Levels-of-processing effect"?
      {name: "Endowment effect"             ,article: "Endowment_effect"},
      {name: "Backfire effect"              ,article: "Confirmation_bias#backfire_effect"},
    ]},
    {name: "Protection of status", children:[
      {name: "System justification"     ,article: "System_justification"},
      {name: "Reverse psychology"       ,article: "Reverse_psychology"},
      {name: "Reactance"                ,article: "Reactance_(psychology)"},
      {name: "Decoy effect"             ,article: "Decoy_effect"},
      {name: "Social comparison effect" ,article: "Social_comparison_bias"}, // NOTE(TilmannR): bias or effect?
      {name: "Status quo bias"          ,article: "Status_quo_bias"},
    ]},
    {name: "Simplifying options and choices", children:[
      {name: "Ambiguity bias"         ,article: "Ambiguity_effect"}, // NOTE(TilmannR): bias or effect?
      {name: "Information bias"       ,article: "Information_bias_(psychology)"},
      {name: "Belief bias"            ,article: "Belief_bias"},
      {name: "Rhyme–as–reason effect" ,article: "Rhyme-as-reason_effect"},
      {name: "Bike–shedding effect"   ,article: "Law_of_triviality"},
      {name: "Law of Triviality"      ,article: "Law_of_triviality"},
// NOTE(TilmannR): Removed the Delmore effect. https://en.wikipedia.org/wiki/Talk:Delmore_Schwartz#Delmore_effect
      {name: "Conjunction fallacy"    ,article: "Conjunction_fallacy"},
      {name: "Occam's razor"          ,article: "Occam's_razor"},
      {name: "Less–is–better effect"  ,article: "Less-is-better_effect"},
    ]},
  ]},
  {name: "Selecting memories for \nstorage instincts", children:[
    {name: "Calibration of memories/understandings", children:[
      {name: "Misattribution of memory" ,article: "Misattribution_of_memory"},
      {name: "Source confusion"         ,article: "Misattribution_of_memory#Source_confusion"},
      {name: "Cryptomnesia"             ,article: "Cryptomnesia"},
      {name: "False memory"             ,article: "False_memory"},
      {name: "Suggestibility"           ,article: "Suggestibility"},
      {name: "Spacing effect"           ,article: "Spacing_effect"},
    ]},
    {name: "Estimation shortcuts", children:[
      {name: "Implicit association" ,article: "Implicit_stereotype"},
      {name: "Implicit stereotypes" ,article: "Implicit_stereotype"},
      {name: "Stereotypical bias"   ,article: "Implicit_stereotype"},
      {name: "Prejudice"            ,article: "Prejudice"},
      {name: "Negativity bias"      ,article: "Negativity_bias"},
      {name: "Fading affect bias"   ,article: "Fading_affect_bias"},
    ]},
    {name: "Simplifying events", children:[
      {name: "Peak–end rule"           ,article: "Peak–end_rule"},
      {name: "Leveling and sharpening" ,article: "Leveling_and_sharpening"},
      {name: "Misinformation effect"   ,article: "Misinformation_effect"},
      {name: "Serial recall effect"    ,article: "Recall_(memory)#Serial_recall"},
      {name: "List–length effect"      ,article: "Recall_(memory)#Serial_recall"},
      {name: "Duration neglect"        ,article: "Duration_neglect"},
      {name: "Modality effect"         ,article: "Modality_effect"},
      {name: "Memory inhibition"       ,article: "Memory_inhibition"},
      {name: "Primacy effect"          ,article: "Serial-position_effect#Primacy_effect"},
      {name: "Recency effect"          ,article: "Serial-position_effect#Recency_effect"},
      {name: "Part–set cueing effect"  ,article: "Memory_inhibition#Part-set_cuing_effect"}, // NOTE(TilmannR): changed "list" to "set"
      {name: "Serial–position effect"  ,article: "Serial-position_effect"},
      {name: "Suffix effect"           ,article: "List_of_cognitive_biases#Suffix_effect"},
    ]},
    {name: "Specified memory storage", children:[
      {name: "Levels–of–processing effect"  ,article: "Levels-of-processing_effect"},
      {name: "Absent–mindedness"            ,article: "Absent-mindedness"},
      {name: "Testing effect"               ,article: "Testing_effect"},
      {name: "Next–in–line effect"          ,article: "Next-in-line_effect"},
      {name: "Google effect"                ,article: "Google_effect"},
      {name: "Tip of the tongue phenomenon" ,article: "Tip_of_the_tongue"},
    ]},
  ]},
]};

var tree_colors = [
  "#098",// cyan  (originally #7DB5BA)
  "#07A",// blue  (originally #93B6D8)
  "#490",// green (originally #A4D16E)
  "#888",// gray  (originally #B2BBB9)
];
var tree_radii = [142,284,428];

var title_text_size = 32;
var category_text_size = 32;
var subcategory_text_size = 15;
var entry_text_size = 11;

var title_y = -720;
var category_x = 770;
var category_y = 580;

var sub_category_spacing = 1.0;
var category_spacing = 0.0;

var small_dot_radius = 3.0;
var big_dot_radius = 10.0;

var circumcircle_radius = 630.0;
var circumcircle_color = "#CCCCCC";



var polar_to_cartesian = function(radius, angle, full_angle){
  var angle_in_radians = angle * 2*Math.PI / full_angle;
  var x = radius * Math.sin(angle_in_radians);
  var y =-radius * Math.cos(angle_in_radians);
  return {x:x,y:y};
};

var lerp = function(a, b, t){
  return (1.0-t)*a + t*b;
};

var push_radial_path = function(string_array, inner_radius, inner_angle, outer_radius, outer_angle, full_angle){
  var inner_position = polar_to_cartesian(inner_radius, inner_angle, full_angle);
  var outer_position = polar_to_cartesian(outer_radius, outer_angle, full_angle);
  
  var curviness = 0.5; // 0 => straight line, 1.0 => 90 degree turns
  var inner_control_radius = lerp(inner_radius, outer_radius, curviness);
  var outer_control_radius = lerp(outer_radius, inner_radius, curviness);
  
  var inner_control = polar_to_cartesian(inner_control_radius, inner_angle, full_angle);
  var outer_control = polar_to_cartesian(outer_control_radius, outer_angle, full_angle);
  
  string_array.push('<path d="M',
    inner_position.x,' ',inner_position.y,' C ',
    inner_control.x ,' ',inner_control.y ,', ',
    outer_control.x ,' ',outer_control.y ,', ',
    outer_position.x,' ',outer_position.y,'"/>\n');
};

var push_circle = function(string_array, position, radius){
    string_array.push('<circle cx="',position.x,'" cy="',position.y,'" r="',radius,'"/>\n');
};

var push_text = function(string_array, input_string, text_size, attributes, alignment = 0.5)
{
  var lines = input_string.split('\n');
  var num_lines = lines.length;
  if(!(num_lines > 0)) return;
  var line_height = text_size * 1.5;
  
  string_array.push('<text ');
  string_array.push.apply(string_array, attributes); // Push an array of elements
  string_array.push('>');
  
  var total_height = line_height*(num_lines-1) + text_size;
  var lowest_position = text_size;
  var hightest_position = text_size-total_height;
  var y = lerp(lowest_position, hightest_position, alignment);
  string_array.push('<tspan x="0" y="',y,'">',lines[0],'</tspan>');
  
  for(var i = 1; i < num_lines; ++i){
    string_array.push('<tspan x="0" dy="',line_height,'">',lines[i],'</tspan>');
  }
  
  string_array.push('</text>\n');
};

var generate = function(){
// Figure out the positioning of the entries
  var angle_offset = 0.5 * (1 + category_spacing + sub_category_spacing);
  var accumulator = angle_offset;
  var num_sub_categories = 0;
  var num_entries = 0;
  
  var categories = tree_text.children || [];
  var num_categories = categories.length;
  for(var i = 0; i < num_categories; ++i){
    var category = categories[i];
    
    var sub_categories = category.children || [];
    num_sub_categories += sub_categories.length;
    for(var k = 0; k < sub_categories.length; ++k){
      var sub_category = sub_categories[k];
      
      var entries = sub_category.children || [];
      num_entries += entries.length;
      for(var m = 0; m < entries.length; ++m){
        entries[m].angle = accumulator;
        accumulator += 1;
      }
      accumulator += sub_category_spacing;
      
      var first_angle = entries[0].angle;
      var last_angle = entries[entries.length-1].angle;
      sub_category.angle = (first_angle + last_angle) * 0.5;
    }
    accumulator += category_spacing;
    
    var first_angle = sub_categories[0].angle;
    var last_angle = sub_categories[sub_categories.length-1].angle;
    category.angle = (first_angle + last_angle) * 0.5;
  }
  var full_angle = accumulator - angle_offset;
  
// 'Draw' everything
  var result = []; // Array of strings and numbers to be merged into the SVG's content.
  var text_flipping_attributes = 'text-anchor="end" transform="rotate(180 12,0)"';
  
  // Draw the outer circle
  result.push('<circle r="',circumcircle_radius,'" style="stroke:',circumcircle_color,';" fill="none"/>\n');
  
  // Draw the title
  result.push('<text style="font-size:',title_text_size,'px; font-weight:bold; text-anchor:middle;" y="',title_y,'">',tree_text.name,'</text>');

  // Draw the categories
  result.push('<g style="font-size:',category_text_size,'px;">\n');
  {
    var attributes_0 = ['style="text-anchor:middle; font-weight:bold; fill:',tree_colors[0],'" transform="translate(', category_x,',',-category_y,')"'];
    var attributes_1 = ['style="text-anchor:middle; font-weight:bold; fill:',tree_colors[1],'" transform="translate(', category_x,',', category_y,')"'];
    var attributes_2 = ['style="text-anchor:middle; font-weight:bold; fill:',tree_colors[2],'" transform="translate(',-category_x,',', category_y,')"'];
    var attributes_3 = ['style="text-anchor:middle; font-weight:bold; fill:',tree_colors[3],'" transform="translate(',-category_x,',',-category_y,')"'];
    push_text(result, categories[0].name, category_text_size, attributes_0);
    push_text(result, categories[1].name, category_text_size, attributes_1);
    push_text(result, categories[2].name, category_text_size, attributes_2);
    push_text(result, categories[3].name, category_text_size, attributes_3);
  }
  result.push('</g>');
  
  // Draw everything else
  result.push('<g style="font-size:',entry_text_size,'px;">\n');
  for(var i = 0; i < num_categories; ++i){
    var category = categories[i];
    result.push('<g style="fill:',tree_colors[i],'; stroke:',tree_colors[i],';">\n');
    
    var sub_categories = category.children || [];
    var num_sub_categories = sub_categories.length;
    for(var k = 0; k < num_sub_categories; ++k){
      var sub_category = sub_categories[k];
      result.push('<g>\n');
      var is_flipped = (sub_category.angle > (full_angle / 2));
      
      // Draw the entries and the curvy trees
      var entries = sub_category.children || [];
      var num_entries = entries.length;
      for(var m = 0; m < num_entries; ++m){
        var entry = entries[m];
        var angle_in_degrees = entry.angle * 360.0 / full_angle - 90.0;
        if(entry.article){
          result.push('<a xlink:href="',link_prefix,entry.article,'">\n');
        }
        result.push('<g transform="rotate(',angle_in_degrees,') translate(',tree_radii[2],')">\n', // Using a more pleasant coordinate system
          '<circle cx="3" r="',small_dot_radius,'"/>\n', // Draw a small dot
          '<text x="12" y="4" ',(is_flipped? text_flipping_attributes:''),'>',
          entry.name,'</text>\n', // Draw the entry's text
          '</g>\n');
        push_radial_path(result, tree_radii[1], sub_category.angle, tree_radii[2], entry.angle, full_angle);
        if(entry.article){
          result.push('</a>\n');
        }
      }
      push_radial_path(result, tree_radii[0], category.angle, tree_radii[1], sub_category.angle, full_angle);
      
      // Draw the subcategories
      var position = polar_to_cartesian(circumcircle_radius, sub_category.angle, full_angle);
      push_circle(result, position, big_dot_radius);
      
      var text_attributes = ['style="font-size:',subcategory_text_size,'px;" '];
      if(is_flipped){
        text_attributes.push('transform="translate(',position.x-24,',',position.y,')" text-anchor="end"');
      }else{
        text_attributes.push('transform="translate(',position.x+24,',',position.y,')"');
      }
      var alignment = 0.5 * (1.0 + Math.cos(sub_category.angle * 2*Math.PI / full_angle));
      push_text(result, sub_category.name, subcategory_text_size, text_attributes, alignment);
      result.push('</g>\n');
    }
    result.push('</g>\n');
  }
  result.push('</g>\n');
  
  // Truncate all numbers.
  for(var i = 0; i < result.length; ++i){
    if(typeof result[i] !== "number"){ continue; }
    result[i] = result[i].toFixed(1);
  }
  
  var biases = document.getElementById("biases");
  biases.innerHTML = result.join('');
};

generate();

]]></script>
</g>

<g id="brain" transform="translate(950,775) scale(0.09)">
<path style="fill:#979797;" d="m921,1085-83-125-399,0,281,227,141-21"/>
<path style="fill:#646464;" d="m554,991c47,24,135,119,151,143,7-20-51-113-120-151-33-18-65-62-65-62l-26,18s13,27,60,51m79-83-34,7c25,29,158,186,200,206-27-46-165-213-165-213zm152,110c-35-53-43-123-43-123l-36,11s34,96,51,120c16,23,68,68,68,68s-7-27-40-76zm127,27c-26-38-90-112-91-164h-28s-13,13,6,54c20,40,80,120,94,137,14,16,1,64-68,87-70,22-106,22-130-10-23-33-101-92-159-125-57-33-67-74-67-74l-41,7s14,39,37,64c23,24,93,39,147,92,45,43,71,63,87,76,15,12,90,27,171-20,80-47,69-84,42-122m-286-70c26,46,104,143,146,173-16-24-146-173-146-173z"/>
<path style="fill:#afafaf;" d="m-1329-313c-4,7-44,30-75,82-42,69-51,156-27,263-37,66-70,197-29,302,24,63,71,104,146,132,8,121,130,198,200,211,24,28,46,57,186,85,48,89,135,135,214,170,10,0,21-1,41-1,33,21,84,53,158,53,71,0,146-30,231-93,21,2,36,4,52,4,82,0,178-52,212-69,38,4,69,7,100,7,120,0,233-41,354-125,115-1,183-27,290-101,114-1,246-33,295-70,96-10,253-71,292-207,64-28,130-121,154-218,12-49,25-141-35-215-4-142-24-282-151-379-32-115-149-156-156-164-5-53-30-89-87-123-34-68-120-141-274-160-29-62-124-171-328-177-89-45-166-65-252-65-19,0-39,0-67,2-37-11-81-17-128-17-77,0-152,17-208,48-76,5-138,18-192,38-14,5-26,22-35,32-26,8-61,17-70,25-32,27-58,60-83,102-152,47-323,118-367,190-94,35-237,124-266,222-81,47-87,205-92,214z"/>
<path style="fill:#959595;" d="m710,601-634,225,194,142,224-9,386-1,247-132,158-266-19-72,12-90-110,91z"/>
<path style="fill:#e9e9e9;" d="m-1277,0s50-10,77-62l-38-7,3-34s81-33,76,42c-0,0-0,0-0,1-0,9-2,20-7,32-17,40-101,116-111,29zm152,355c-58-33-83-120-83-120-72,69-37,157-5,198-21-71,3-124,3-124s40,48,85,46zm-204-305c-68,71-42,151-17,178,9-66,40-73,62-108-29-19-44-69-44-69zm280,363c-56,3-126,46-126,46,33,56,93,58,93,58s-5-66,29-87c68,64,124,33,124,33l-7,38s52-29,79-54c-39,1-142-15-193-34zm-243-483c-48-31-68-112-68-112-56,91-15,182-15,182s42-60,83-69zm349,454c-5-29-50-97-87-112-11-46-40-85-79-101,47-14,87-33,105-87,0,0-140-33-144,71-3,104,144,198,206,229zm-48-456s33,44,40,75c9-42-11-106-35-132,0,0-92,29-83,130,46,13,76,40,76,40s-9-58-27-81c15-21,29-33,29-33zm62-50c29,3,125-56,29-124-1-34,69-25,106-9,9-29-6-98-31-108,33-11,68,7,95,34,15-19-11-54-60-71,0,0-165,2-140,279zm103,330c-66-44-87-120-87-120-103,81-1,180,40,198-37-48-48-118-48-118s60,44,95,40zm352-281s-52-38-107-46c-325-21-267,262-267,262,99,0,46-116,46-116s76,29,83,13c7-15-29-54-44-77,78-3,142,11,142,11s11-31,13-58c56,50,132,11,132,11zm-659-206c3-17,9-45,49-86,21-1,127-9,167-77-29-31-37-40-37-40l-63,53c-57,22-220,99-129,231,59-41,93-106,13-80zm-61-216c-115,71-83,270-83,270s39-93,70-130c-17-52,13-139,13-139zm46,62c66-42,120-31,120-31s-7-62,0-99c-103,38-120,130-120,130zm220-66c80,25,103-21,115-60-40-32-118,3-118,3s-5,38,3,56zm156,11c27-3,64-1,101,11,9-29,25-73,66-116-105,17-167,104-167,104zm179,139c26-36,72-77,72-77s-25-10-67,15c2-49,10-142,10-142s-80,103-15,204zm252,170s-5-44-59-101c-153-108-247,95-247,95,93,64,65-44,65-44l72,20s-7-86,18-72c65,103,150,101,150,101zm-561-445s80-31,119-7c14-43,12-88,33-121-65,33-153,129-153,129zm-88-15s-10-28-15-56c-88,41-163,129-163,129,83-28,132-28,132-28l46-44zm468-38c18,38,31,116,31,116,28-36,7-132,7-158,33,2,117,31,117,31s12-69,49-80c52,46,93,7,93,7s-43-40-104-41c-148,18-213,85-195,124zm81,44s-3,93-46,172c46-11,118-79,118-79l-62,7s9-58-9-101zm-27,849c7-44,5-145,72-248,0,0-88,59-124,152,31-20,41-28,41-28s-13,44,10,124zm-200,90c-93,22-49,150-49,150,41-170,150-82,150-82s-26-85-101-67zm-184,373c-5,93,106,137,106,137s36-106-70-168c41-19,88-23,119-69,0,0-147-52-156,101zm629-243s-15-106-85-124c-110-28-221,119-221,119,78-5,158-44,208-82,36,64,98,88,98,88zm169,80c-148-80-257-5-257-5,109,62,174,38,257,5zm-353-339c49-56,104-90,104-90s-12,59-12,121c70-67,46-139,46-139s88-24,119-51c-241-28-257,160-257,160zm-153-989s36-31,88-62c-127-31-283,38-283,38,112-21,197-23,197-23l-2,46zm265,238s93-5,145,0c-13-82,36-186,36-186-57,62-67,101-72,145-49,7-109,41-109,41zm-488-235c-104,10-158,75-150,134,0,0,65-88,150-134zm234,1572s-44,54,28,44c72-10,106-90,88-150-20,51-117,106-117,106zm171-1145s47-48,117-72c91-31,239,46,239,46s-46-62-122-95c-187-62-234,121-234,121zm161,20c-111,12-93,72-44,132-18-98,44-132,44-132zm106,176s5,72,57,113c52,41,135,15,88-69-44-88-117-111-117-111s106-12,119-56c-267-10-210,194-210,194,36-72,62-69,62-69zm106,430c-133-3-153,139-153,139l57-54s-2,85,51,124c-7-77-13-127,2-166,83-28,156,93,156,93s-10-134-114-137zm413,85c28-41-7-212-109-176-101,36-93,186-93,186,29-4,44-44,52-108,26,18,122,139,150,98zm-418-178c107,28,145-25,156-106-72,101-213,44-213,44s-2,46,57,62zm-329,506c18,26,26,69,0,121,49-16,72-64,72-64s57,28,93,23c-54-85-166-80-166-80zm264-1190c46-31,39-88,28-111,117-33,106-90,200-119-14-35-36-56-36-56s109-7,111-44c-101-36-187,49-187,49s64,13,67,36c-252,36-184,246-184,246zm-88-266c12-65,42-103,72-132-148,33-72,132-72,132zm499,699c-45-66-15-121-15-121s23,32,72,49c-150-240-267-15-267-15,54,46,86,81,126,158l3-19c-19-85-23-178-23-178s49,129,104,126zm107,214c-15-141-150-159-150-159,31,143,99,153,150,159zm-944,425c-78-2-140-80-140-80s-85-22-31,38,123,81,171,41zm507-1100s-28,51,5,101c33,49,87,71,127,49-13-106-132-150-132-150zm41-341s104-51,176-62c-96-62-262,20-262,20,62,12,85,41,85,41zm67,266s41,67,72,101c-15-116,52-173,52-173s33,56,62,88c10-77,106-111,171-139-231-51-358,124-358,124zm98,261c41,25,150,23,226,12-46-28-104-23-104-23s62-27,88-41c-109-41-210,51-210,51zm314,178c-31,15-80,7-80,7,5,33,2,62-12,106,57,23,96-69,93-113zm-46-318c2-41,28-90,67-111-33-15-88-33-143,38,0,0,54,46,75,72zm-371,1194,75-25s-18,31-15,82c39-31,111-124,98-173-145,49-158,116-158,116zm-114-56c-23,20-130,67-130,67,52,56,135-38,135-38l49,20s-20-38-54-49zm-1396-551c-104,150-7,266,52,259-132-56-52-259-52-259zm145,430c28,88,145,124,249,85-162,16-249-85-249-85zm1827-295s36,95-2,160c-39,64-231,80-231,80,91,23,249-31,249-31s26,49,62,75c5-28-15-121-15-121s36,44,57,59c2-95-57-158-57-158s39,15,67,33c-28-101-130-98-130-98zm-83-1025c-65-49-132-77-197-72,0,0,15,38,7,62,46-7,143-5,189,10zm135,502-75-49s-5-46,44-134c0,0-122,56-65,155,57,98,127,126,83,253,49-23,104-163,12-225zm62,212c-33,36-62,67-158,103,0,0,15,69,15,101,61-27,140-137,143-204zm-91-619s39,67,44,121c54,15,143,51,195,111,26-54,80-150-174-165-10-59,44-77,145-59-5-44-83-165-210-7zm228,466c-44-132-192-119-192-119s54,54,80,101c26,46,119,106,111,18zm275-137s-109-23-132,44c-23,67-62,77-62,77s10,72,93,36c83-36,101-158,101-158zm-213,284c-18,36-101,95-101,95,117-12,132,23,187,5,54-18-10-85-10-85s-32-14-75-15zm-163,261c44,36,65,90,83,160,41-95,15-173,15-173s135-5,161-41c-180-78-260,54-260,54zm452-401s-54,113-124,129c23,36,57,49,98,18s26-147,26-147zm-2,238s7,77,0,113c49-20,184-150,75-313,5,54,5,158-75,199zm-166-461c41,0,72,5,104,20-13-57-33-119-124-145,0,0,25,62,20,124zm-455,937s-30,61-54,75c-10,33-12,80-12,80l49-62s39,20,80,10c-40-32-46-62-62-103zm449-25c54-59,91-121,91-173,0,0-45,30-62,36-0,34-15,116-28,137zm163-235c26,18,49,38,67,62,25-28,33-75,33-75l33,20s25-36,44-108c-49,62-179,101-179,101zm-780-1139c31,7,78,20,78,20s-7-72-130-69c0,0,44,33,52,49zm140,59,57,59s101-41,169-46c-44-23-137-49-226-12zm-972-5c41-23,15-82-26-93-26,2-67,28-67,28s65,18,93,64zm101-108c22,19,39,77,39,77s85-31-5-80c10-54-12-72-46-80,0,0,28,56,13,82zm332-38s-143-36-239,28l104,18,135-46zm23-15c44-2,75-5,75-5s-49-113-202-90c0,0,106,28,127,95zm330-5s-41-69-150-80c0,0,36,46,36,82,26,0,114-2,114-2zm98-15-31,23s162,36,228,82c-46-67-140-98-197-106zm514,417c44-7,80-44,80-44l-65,10s-10-88-135-90c0,0,96,79,119,124zm348,243s5,98-10,126c20,28,49,77,54,95,20-59,18-168-44-222zm117,347-33,46s23,126,23,160c18-59,10-207,10-207z"/>
<path style="fill:#5e5e5e;" d="M1296,346s-20,29-35,60c8,12,9,31,5,50-3,6-7,13-11,19-46,40-146,117-398,180-99,19-156,12-208,9l-61,34s137,19,269-26c231-50,352-149,393-190-96,149-321,203-477,227,167-2,370-42,483-182,1-1,3-3,6-6,7,13,7,27,3,40-48,73-135,119-211,153-198,88-418,107-631,91,264,51,559,8,784-147,0,5-0,13-6,24-52,119-179,103-278,135-140,45-307,84-458,67-42-4-83-20-118-45,60,17,125,25,186,9-79-1-154-14-227-45-15-16-23-29-23-29s-12,4-40,5c37,94,113,140,199,158-46,12-100,18-155,6,13-14,28-34,30-55-21,20-45,36-63,46-16-5-32-13-48-22,25-14,57-39,65-69-33,27-68,42-94,50-24-18-47-41-70-70l-63,5s154,271,435,149c53,4,202,8,370-0,6-0,13-1,20-2,121-19,252-84,307-201,54-41,99-100,109-171,27-33,36-88,3-121,28-39,25-92,10-136zm-31,206c-180,130-319,195-838,229,0,0,570,54,838-229zm-865,167c-15,5-23,8-39,14,150,20,304,13,453-6-137,8-280,15-414-7zm703,99c-67,71-158,103-251,118-41,4-170,5-251,5,42-5,84-15,121-26,71-17,142-35,214-51,56-9,113-23,166-46z"/>
<path style="fill:#515151;" d="m24-328c-268-11-236,183-222,236,36,8,76,32,120,85,54,8,114-11,146-27-38,48-88,57-116,58,48,38,115,46,164,16-67,65-160,40-209-17-44-52-102-117-198-79-17,10-40,27-60,51,25-7,54-5,86,10-160,1-167,181-167,181-11-58-0-113,25-150,10-39,36-71,65-92-14-2-39,2-85,27-14,7-27,16-40,25-30,49-106,158-175,160-89,2-126-70-126-70s147,86,195-13c-23-47-142-78-142-78s67-14,180,37c7-12,15-24,24-36,20-20,45-40,75-56-16-20-78-96-114-126,39,5,81,49,81,49l-23-107s39,42,50,115c8,24,26,44,37,54,34-12,74-17,118-9,12-4,25-8,39-10-1-17-2-57,12-121,17-74,63-110,111-124-45-66-153-64-153-64,94-36,168,27,196,57,47-3,89,8,104,19zm1299,668c-36,144-209,203-296,211-50,39-195,74-304,70-97,76-172,106-292,101-191,152-373,131-444,118-37,21-171,92-264,63-203,160-345,77-393,38-1,0-2,0-4,0-27,5-63,5-100-8-30-10-56-27-76-48-28-26-56-64-81-115-131-23-160-52-184-84-68-9-200-90-203-215-221-63-187-336-121-444-63-255,105-349,105-349s5-168,92-215c26-100,178-192,267-223,44-78,231-150,366-189,21-42,50-75,82-102,17-14,72-25,72-25s15-26,38-35c68-25,138-34,193-38,101-58,255-60,342-31,92-7,189-5,321,63,211,5,308,120,332,181,145,13,240,84,276,160,55,31,87,70,87,126,0,0,126,42,158,162,131,97,150,247,153,381,121,141-11,405-122,448zm-898-1420-45,49c116,6,218,61,257,85,24-3,53-6,88-7-52-53-138-147-301-128zm21,84c-47-20-112-9-161,5,42,17,73,44,89,61,46,12,82,27,97,35,29-25,80-36,111-41-32-14-92-40-138-60zm-1417,366c21-17,52-29,95-32-57,23-90,59-110,93,77-63,186-47,227-20,65-44,134-70,134-70s7-26,42-68c-14-26-40-39-71-44-32,6-78,29-86,99-16-22-4-72,21-101-35,2-70,10-94,14,76-84,234-28,271-15,30-38,129-94,174-107,23-55-36-84-84-102,134-18,137,102,137,102s52-36,87-57c-7-21-42-44-42-44s65,14,135,13c130-59,212-68,256-65,2-0,3-0,3-0s-15-26-44-47c72,11,127,42,146,53,29-4,74-9,120-6,14-7,32-24,47-39,16-18,16-18,16-18s-71-65-245-55c24,30,15,60,15,60s-116-155-364-52c87,9,145,52,168,92,0,0-150-43-257,19,47-49,95-64,132-66-81-18-184-22-286,18,26,3,57,18,74,64-50-43-109-36-149-22-66,59-75,103-75,103s58,3,87,42c-34-15-94-23-184,0-89,23-250,94-276,165-18,49-20,82-19,98zm-228,75c17,4,33,18,43,29,23-24,60-43,114-46,0,0-123,37-127,178,22-21,60-41,126-36-204,84-150,213-98,265,20-8,41-13,59-17,27-20,72-61,99-126,0-0,0-0,0-0,0-0,0-1,0-2-40-25-82-8-130,11,21-43,70-56,110-59,21-13,63-41,119-83-8-4-32-20-39-40,93,31,113-34,129-73-42-58-152-15-203,10-16,36-17,66-17,66-7-31-10-104,41-147-6-17-19-60-15-89-42,5-145,73-211,162zm-89,380c11-32,32-82,60-115,2-23,15-42,30-58-3-35-9-113,33-168-25-3-72,1-105,71-37,78-40,208-18,270zm-88,214c11-30,39-66,68-80,5,41,16,79,22,87,13,22,31,38,52,36,15-1,38-15,62-42,9-9,28-34,36-62,6-36,7-76,7-99-22-3-55-6-84,1,10-11,22-21,35-29-44-44-53-83-50-112-20,46-39,122-31,212-18-18-84-89-90-144,22,18,50,49,50,49s0-2,1-6c-38-63-36-132-36-132s-175,173-43,321zm75,207c10-33,24-58,37-77,6-24,3-46-1-63-38-24-57-68-55-105-57,56-70,136-70,136-2-19,0-51,10-83-23-4-41-10-41-10s-63,162-26,249c33,77,64,111,113,122,0-26,1-67,5-93-73-2-97-100-68-141,10,86,79,97,97,68zm244,211c42,95,128,107,173,106,23-28,56-50,101-51-8-27-22-88-11-143-54-0-175-15-203-132-37-157,70-196,105-204,3-59,29-127,116-175-27-98-111-102-111-102,106-5,126,59,144,94,15-84-25-159-63-203,74,25,89,113,91,166,14-30,51-88,87-123-6-18-17-52-32-69-14-25-38-59-72-83,0,0,43,10,72,38,2-32,12-64,35-91,0,0-45,129,28,187,38-23,85-37,144-33,13-43,43-130,114-175-20-115-126-149-126-149,48,0,83,22,107,49,7-25,24-77,32-106,8,37-4,108-10,136,13,21,21,42,25,56,44-18,103-20,180,7-5-47-10-169,74-261,20-21,40-39,61-55-45-62-119-38-119-38,49-51,128-5,156,13,37-23,75-38,111-47,28-6,88,11,88,11s50-21,76-18c1,0,3,0,4,0-56-40-89-34-89-34-76-81-255-7-321,28-15-2-31-3-45-1-82,18-89,70-84,105,32,27,42,54,43,76,25-28,59-53,100-67-129,115-139,178-139,178-6-25,1-56,20-86-3-9-9-22-17-42-44-92-215-19-255-2-40,16-118,63-76,139,42,76,36,144,36,144s-15-31-47-81c-31-50-105-28-195,34-89,63-39,134-39,134s-50-18-121,47c-71,65-34,289-34,289s-21-30-42-65c-102,21-102,94-105,157,63,18,81,60,81,60s-116-34-150,28c-28,52-0,116,48,191,37,39,111,99,238,136-34,9-179-31-179-31s-72,10-126,39c26-30,100-65,100-65s-104-71-120-180c-0-1-0-2-1-3-25,18-45,41-60,66-23,65-32,167,78,262-33,1-79-21-107-55,7,38,23,77,54,110,63,60,118,63,182,42-21,23-50,44-50,44s92,49,168,26c0-20,6-52,21-83-28-0-61-9-88-27-44,7-108,5-144-23,53,10,92-0,110-8-16-22-27-51-26-87zm1034-1089s41-33,94-23c44-64,106-109,173-136,12-31,26-92-28-104-100-20-239,107-239,107s76-15,118,2c-218,8-199,199-187,264,68,51,100,104,100,104s-112-102-207-120c-95-17-207,55-205,195,63,21,118,128,118,128s-118-118-205-116c-87,1-166,76-185,165,45-1,112,39,112,39s-132-45-235,47c-82,74-77,177-71,215,2,9,5,18,8,24-20-18-39-81-44-98-51,24-92,100-50,181,39,75,143,80,183,79,13-21,34-39,66-49-10-42-15-81-15-81s87,88,214,98c-23-26-46-74-23-106,13,87,101,92,148,89,182-63,259-176,259-176s-2,73-110,170c29,31,42,49,42,49s65-141,182-141c28,0,55,4,78,13,35-1,80-9,116-34,35-59,47-154-65-289-65-70-126-94-126-94s36,5,83,33c-4-25-3-82,83-125,37-267-179-312-179-312zm1379,694c-38,68-132,117-224,127-5,9-11,19-18,29,77-1,99,64,76,124,0-93-62-101-103-96-19,17-44,33-75,46,2,20,1,46-4,76-18,89-84,157-134,186,92-20,174-70,232-197-15,76-55,144-55,144s194-26,242-191c0-26-3-58-18-95,15-3,34,46,44,78,9-6,19-15,30-25,15-44,31-119,9-208zm33,160c58-76,104-192,35-307-0-2-0-5-0-8-7,19-20,38-39,52,15-33,32-84,34-138-1-13-2-28-5-42-21,52-44,91-88,127,17-43-37-153-134-177,100,1,150,93,152,122,35-47,56-74,54-138-17-54-48-111-105-164,0,35-2,103-23,147-13-60-55-104-77-123,3,72-19,158-73,234-31,43-69,63-106,69,16,18,42,48,52,69,60,44,137-21,168-118-9,197-158,162-158,162s-1,31-13,73c-10-79-75-156-102-185-36-3-67-15-81-22-21,49-62,91-112,107-1,31-6,58-14,75,163-65,237,45,237,45s-118-55-185-27c-33,13-72,30-101,93,32,47,84,118,89,219,18-0,53-11,90-75-10,57-16,112-125,152,4-24,6-51,4-81-4-55-25-114-75-167-40-43-112-24-170,3,22,40,22,117,12,169-10,52-154,58-201,57-18,55-31,140-192,165-44,31-49,90-49,90-18-28-58-78-94-76-35,31-119,60-156,67,18,25,26,50,24,61-34-63-147-113-211-89,39,131-51,191-110,199,158-119,67-206,24-208-39,70-175,134-214,158-5-84-76-131-76-131,79-5,94,68,94,68s65-18,137-89c48-48,38-102,27-131-88,0-143-49-143-49,153,33,234,10,298-2-39,26-75,40-109,47,5,17,6,36,5,52l47,35c82-15,141,12,179,48,81-17,305-87,174-326,118,120,50,236,50,236s325,48,245-276c30,22,50,97,50,97s154,23,168-25c31-114-76-218-76-218,8,3,60,28,67,33,3-22,3-57-3-109-16-119-195-120-195-120s21-22,90-8c-44-48-36-100-36-100,23,54,52,89,75,111,4,1,9,3,15,5,16,3,29,9,41,16,27-1,60-16,81-69,40-102-21-195-114-216-43-7-69-7-69-7s56-17,108-2c-13-27-26-66-13-103-21-34-90-123-209-74,13-36,102-34,102-34s-116-39-142-94c42,23,94,60,131,60,8-31,26-102,126-94-52,23-100,52-94,105,25,17,82,56,104,100,12-12,29-24,53-33,46-11,52-7,52-7s-76,18-89,82c-13,64,11,92,51,143,39,51,68,116,39,186-22,54-76,81-101,90,33,38,35,131,31,162,29-10,84-23,125-5,120-124,87-313,43-404,51,45,73,117,77,181,36-16,143-80,59-221-100-168-237-94-237-94s23-49,123-31c-26-39-68-63-68-63s105,3,209,155c55-18,113-117,96-179-39-165-276-178-276-178,142-28,232,63,232,63s-17-51-68-115c140,116,164,221,146,301,29-14,82-25,136,34-55-10-102-28-149,6-24,55-65,96-87,115,14,31,16,66,10,98,33,15,138,55,200-23,110-138,67-259,55-345,21,21,35,52,41,90,45,24,69,52,79,82-3-53-17-140-76-195-79-68-168-42-168-42s36-39,73-36c-4-34-7-83-99-66-4,1-10,2-16,3-60-115-228-125-228-125,134-29,235,54,270,89,0-0,0-0,0-0s-51-132-279-157c-71-5-122-4-156-0-51,9-93,24-93,24s15,11,52,52c-119-52-249-115-278-55,9,11,22,29,13,87,61-18,123-22,175-10,34,7,65,31,91,62,24-31,101-78,177-80-108,34-147,89-157,107,31,47,50,102,54,142,89,14,173,76,206,150-137-134-308-144-308-144,25-7,51-10,77-8-8-61-50-141-109-186-218-65-361,84-398,141,56,63,83,134,95,193,29-16,108-53,168-11-96-3-141,38-160,64,2,22,2,40,1,52,102-24,172,67,203,88,34,23,116,28,116,28s-54,15-98,1c7,14,15,37,8,55-10-33-29-59-45-76-45-35-112-97-197-61-80,34-81,98-78,125,97,74,149,208,151,278,58-12,91,13,91,13,3,1-79,9-132,75-20,32-50,38-74,46,17,31,36,95,31,141-18-78-81-191-211-160-129,31-137,181-137,181l89,86s-58-36-110-28c-10-57-32-154-123-165-91-11-179,65-216,113-2-44-39-124-121-118-78,5-135,81-51,236,0,0,0,0,1,0,74,32,94,97,94,97s-134-157-242-21c-108,136,110,365,290,244-18,41-29,70-29,70s229,44,364-144c2,43,2,84,2,84s174-28,226-176c1,64-5,102-5,102s84-7,147-76c-5,49-76,94-76,94s104,4,189-51c24-23,55-66,50-127,19,33,25,74,27,98,16-8,77-46,110-146-0-20-2-33-3-42-26-3-53-16-76-31,0,0,121,31,176-52-13,49-35,72-61,81-4,60-28,131-28,131s121,7,204-46c13-12,29-29,45-49-67,8-106-44-126-90,36,43,108,86,235,28,6-2,13-4,18-7-19,17-38,30-55,41-3,10-7,20-10,31,20-7,169-67,203-204,36-147-97-176-97-176s101-16,135,63c39-17,127-69,149-203,6,24,8,60-2,99,45-3,167-44,217-157,18,31,33,153,23,230z"/>
</g>

</svg>